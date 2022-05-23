const express = require("express")
const router = express.Router()
const middlewareControler = require("../controller/middlewareController")

router.post("/add", middlewareControler.verifilyTokenAndHostOrAdmin)

module.exports = router