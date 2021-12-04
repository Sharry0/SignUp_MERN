
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./config/.env" })
};

const cors = require("cors");
const bcrypt = require("bcrypt");
const express = require('express');
const app = express();
 

app.get('/', function (req, res) {
  res.send('Hello World')
})
 






app.all("*", (req, res) => {
    res.send("Sorry, we couldn't find this website")
})

app.listen(4000, (req, res) => {
    console.log("listening on PORT 4000")
})

