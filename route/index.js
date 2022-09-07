const userRouter = require("./user")
const placeRouter = require("./place")
const roomRouter = require("./room")

function router(app) {
    app.use("/user", userRouter)
    app.use("/place", placeRouter)
    app.use("/room", roomRouter)
}

module.exports = router;