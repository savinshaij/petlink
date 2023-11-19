const mongoose = require('mongoose')

const userSchrma = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String ,
    phone:String,
    password : String   //nonhashed password
})

const userModel = mongoose.model("user",userSchrma)
module.exports = userModel;