
// __________imports modules____________
const express = require("express")
const router = express()

// __________import controllers____________
const {getTest} = require("../controllers/test")
// __________import middlewares____________

// __________api routes____________

router.get("/test", getTest)


module.exports = router