const express = require("express")
const router = express.Router()
const placeController = require("../controller/placeController")
const middlewareController = require("../controller/middlewareController")

router.post("/add", middlewareController.verifilyToken ,placeController.addPlace)
router.get("/",placeController.getAllPlaceAndTotalRoom)

module.exports = router