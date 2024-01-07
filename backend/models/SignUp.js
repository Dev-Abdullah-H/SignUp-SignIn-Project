const mongoose = require('mongoose')
const SignupScehma = new mongoose.Schema({
    fname: String,
    lname: String,
    age: String,
    email:String,
    password:String
})

module.exports = mongoose.model('signup', SignupScehma)