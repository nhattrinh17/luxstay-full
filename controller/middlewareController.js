const jwt = require("jsonwebtoken")

const middlewareControler = {
    verifilyToken: async(req, res, next) => {
        const token = req.headers.token
        if(token) {
            const accessToken = token.split(" ")[1]
            const JWT_ACCESS_KEY = process.env.JWT_ACCESS_KEY
            await jwt.verify(accessToken, JWT_ACCESS_KEY, function(error, user) {
                if(user) {
                    req.user = user
                    next()
                } else {
                   return res.status(403).send("Invalid token")
                }
            })
        } else {
           return res.status(404).send("You are not authentication")
        }
    },
    verifilyTokenAndHostOrAdmin: async (req, res, next) => {
        middlewareControler.verifilyToken(req, res, () => {
            if(req.user.isHost || req.user.isAdmin) {
                next();
            } else {
                return res.status(403).send("You are not authorized to perform this action")
            }
        })
    },
    verifilyTokenAndAdmin: async (req, res, next) => {
        middlewareControler.verifilyToken(req, res, () => {
            if(req.user.isAdmin) {
                next();
            } else {
                return res.status(403).send("You are not authorized to perform this action")
            }
        })
    }
}

module.exports = middlewareControler