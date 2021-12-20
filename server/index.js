
// __________imports____________

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./config/.env" })
};

const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors");
const bcrypt = require("bcrypt");
const express = require('express');
const { json, urlencoded } = express;
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

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
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({extended: false}))
app.use(cookieParser());
app.use(expressValidator())

// __________routes____________
const userRoutes = require("./routes/user")
app.use("/", userRoutes)

app.all("*", (req, res) => {
    res.send("Sorry, we couldn't find this website")
})

// __________listener____________

app.listen(4000, (req, res) => {
    console.log("listening on PORT 4000")
})

