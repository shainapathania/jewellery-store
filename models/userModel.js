const mongoose = require('mongoose')
const { type } = require('os')

//schema design
const userSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required: [true, "name is required"],
    },
    email:{
        type:String,
        required: [true, "email is required and should be unique"],
        unique: true,
    },
    password:{
        type:String,
        required: [true, "password"],
    },
},
{ timestamps:true}
)

//export
const userModel = mongoose.model('users', userSchema)
module.exports = userModel;