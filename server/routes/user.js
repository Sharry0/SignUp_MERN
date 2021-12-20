
const express = require("express");
const router = express.Router();

// _________import controllers____________
const {register, login, logout, getLoggedInUser} = require("../controllers/user")

// _________import middleware____________
const {userRegisterValidator, userById} = require("../middlewares/user")
const {verifyToken} = require("../middlewares/auth")

// _________api routes____________
router.post("/register", userRegisterValidator,register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/user", verifyToken,userById, getLoggedInUser)

module.exports = router