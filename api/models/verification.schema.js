const mongoose = require('mongoose')

const verificationSchema = new mongoose.Schema(
    {
        phoneNumber: {
            type: Number,
            required: true
        },
        otp: {
            type: Number,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now,
            expires:30*5*60
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Verification', verificationSchema)