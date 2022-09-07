const express = require("express")
const router = express.Router()
const middlewareControler = require("../controller/middlewareController")
const roomController = require("../controller/roomController")

router.get("/:id", roomController.getRoomById)

router.get("/:name", roomController.getRoomByTagName)

router.post("/add", middlewareControler.verifilyTokenAndHostOrAdmin, roomController.addRoom)

router.put("/edit/:id", middlewareControler.verifilyTokenAndHostOrAdmin, roomController.editRoom)

router.delete("/delete/:id", middlewareControler.verifilyTokenAndHostOrAdmin, roomController.deleteRoom)

router.get("/", roomController.getRoomByPlace)

module.exports = router