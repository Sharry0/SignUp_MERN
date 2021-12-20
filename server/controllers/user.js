
const User = require("../models/user");
const jwt = require("jsonwebtoken");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "../config/.env" })
};

exports.register = async (req, res) =>{
    //check if user already exists
    const usernameExist = await User.findOne({
        username: req.body.username
    })
    const emailExist = await User.findOne({
        email: req.body.email
    })
    if(usernameExist){
        return res.status(403).json({
            error: "Username is taken"
        })
    }
    if(emailExist){
        return res.status(403).json({
            error: "Email is taken"
        })
    }

    // if new user, create new user
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        message: "Signup successful! Please login to proceed"
    })
}

exports.login = async (req, res) =>{

    // find user based on email
    const {email, password} = req.body

    await User.findOne({email}).exec((err, user)=>{
        //if error or no user
        if(err || !user){
            return res.status(401).json({
                error: "Invalid Credentials"
            })
        }
        // if user is found, we use the authenticate method from model
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Invalid email or password"
            })
        }

        // generate a token with user id and jwt secret
        const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET,{
            expiresIn: "24h"
        })

        // presist the token as "jwt" in cookie with an expire date
        res.cookie("jwt", token, {expire: new Date() + 9999, httpOnly: true});

        //return the response with the user
        const {username } = user;
        return res.json({
            message: "Login successful",
            username
        })
    })
}

exports.logout = (req, res) =>{
    //clear cookie
    res.clearCookie("jwt");

    return res.json({
        message: "Logiout successful",
    })
}

exports.getLoggedInUser = (req, res)=>{
    const {username}= req.user
    return res.status(200).json({
        message: "User is still logged in",
        username
    })
}

