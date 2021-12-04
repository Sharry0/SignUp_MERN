
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
 













app.listen(4000, (req, res) => {
    console.log("listening on PORT 4000")
})

