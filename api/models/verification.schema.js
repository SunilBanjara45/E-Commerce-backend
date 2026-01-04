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
        validTill:{
            type:Date,
            required:true
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Verification', verificationSchema)