const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connectDatabase = require("../module/luxstay")

let refreshTokens = []
const userController = {
    // GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isMember: user.isMember,
                isHost: user.isHost,
                isAdmin: user.isAdmin
            },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "10s"
            }
        )
    },

    // GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isMember: user.isMember,
                isHost: user.isHost,
                isAdmin: user.isAdmin
            },
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: "365d"
            }
        )
    },

    userRerister: async(req, res, next) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt)

            const user = [
                req.body.firstName,
                req.body.lastName,
                req.body.email,
                req.body.phoneNumber,
                hashed,
                1,
                0,
                0
            ]

            const [checkUser, checkUserFiled] = await connectDatabase.execute(
                'SELECT * FROM `user` WHERE email = ? OR phone_number = ?', 
                [req.body.email, req.body.phoneNumber]
            )

            if(checkUser.length != 0) {
                return res.status(403).send("This email or phone number is already registered if you forgot your password, please press forgot password")
            }

            await connectDatabase.query(
                'INSERT INTO user(first_name, last_name, email, phone_number, password, isMember, isHost,isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                user
            )

            res.status(200).send("Create Account Success")
        } catch(error) {
            res.status(500).send(error.message)
        }
    },

    userLogin: async (req, res, next) => {
        try {
            const {email, password} = req.body
            let user = null
            const [rows, fields] =  await connectDatabase.execute('SELECT * FROM `user` WHERE `email` = ?', [email])
            user = rows[0]
            const validPasword = await bcrypt.compare(password, user.password)
            if(!validPasword) {
                return res.status(404).send("User information or password is incorrect please try again")
            }
            if(user && validPasword) {
                const {password, ...other} = user
                const accessToken = userController.generateAccessToken(user)
                const refreshToken = userController.generateRefreshToken(user)
                refreshTokens.push(refreshToken)
                return res.status(200).json({...other, accessToken, refreshToken})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    },
    // RefreshToken
    requestRefreshToken: async (req, res) => {
        //Take refresh token from user
        const refreshToken = req.body.refreshToken;
        //Send error if token is not valid
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            //create new access token, refresh token and send to user
            const newAccessToken = userController.generateAccessToken(user);
            const newRefreshToken = userController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.status(200).json({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            });
        });
    },
    userLogout: async (req, res, next) => {
        refreshTokens = refreshTokens.filter(token => token != req.cookies.refreshToken)
        res.status(200).json("Logged user!")
    }
}

module.exports = userController