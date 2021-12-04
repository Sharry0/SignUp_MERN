
require('dotenv').config()
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

