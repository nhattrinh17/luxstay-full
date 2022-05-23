const userRouter = require("./user")
const placeRoute = require("./place")

function router(app) {
    app.use("/user", userRouter)
    app.use("/place", placeRoute)
}

module.exports = router;