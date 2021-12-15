
// __________imports____________

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./config/.env" })
};

const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors");
const bcrypt = require("bcrypt");
const express = require('express');

// __________app____________
const app = express();


// __________db____________

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connected"))
    .catch(err => console.log("DB Connection error", err))
// __________midleware____________

// __________routes____________
// app.get('/', function (req, res) {
//     res.send('Hello the Wörld')
// })

const testRoutes = require("./routes/test")
app.use("/", testRoutes)

app.all("*", (req, res) => {
    res.send("Sorry, we couldn't find this website")
})

// __________listener____________

app.listen(4000, (req, res) => {
    console.log("listening on PORT 4000")
})

