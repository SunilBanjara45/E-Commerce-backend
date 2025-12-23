const mongoose = require('mongoose')
const User = require('./user.schema')

const addressSchema = new mongoose.Schema(
    {
        fullname:{
            type:String,
            required:ture
        },
        phoneNumber:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        },
        addressLine:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
            required:ture
        }
    },
    {
        timestamps: true,
    }
)

module.export = mongoose.model("Address", addressSchema)