
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true
        },
        hashedPassword: {
            type: String,
            required: true
        },
        salt: String
    },
    {
        timestamps: true
    }
);

// _________virtual field_________
userSchema.virtual("password").set(function(password){
   this.hashedPassword = this.encryptPassword(password)
});


userSchema.methods = {
    encryptPassword: function (password){
        if (!password) return "";

        try {
            return bcrypt.hash(password, 12);
        } catch (err) {
            return ""
        }
    },
    authenticate: function (plainText){
        return bcrypt.compare(plainText, this.hashedPassword)
    }
}

//__________Methods__________

module.exports = mongoose.model("User", userSchema)
