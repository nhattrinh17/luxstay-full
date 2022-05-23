const express = require('express');
const middlewareControler = require('../controller/middlewareController');
const router = express.Router();

const  userController = require("../controller/userController")

// Rerister
router.post("/rerister", userController.userRerister);

// Login
router.post("/login", userController.userLogin);

// RefresToken
router.post('/refresh', userController.requestRefreshToken)

// Logout
router.get("/logout", middlewareControler.verifilyToken ,userController.userLogout);


module.exports = router