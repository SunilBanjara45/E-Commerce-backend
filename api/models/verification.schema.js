const mongoose = require('mongoose')

const verificationSchema = new mongoose.Schema(
    {
        phoneNumber: {
            type: Number,
            required: true
        },
        otp: {
            type: Number,
            required: ture
        },
        validTill:{
            type:Date,
            required:true
        }
    },
    {
        timestamps: true,
        expires: 30 * 5 * 60
    }
)

module.exports = mongoose.model('Verification', verificationSchema)