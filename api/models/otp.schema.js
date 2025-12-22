const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema(
    {
        phoneNumber: {
            type: Number,
            required: true
        },
        otp: {
            type: Number,
            required: ture
        }
    },
    {
        timestamps: true,
        expires: 30 * 5 * 60
    }
)

exports.module = mongoose.model('OTP', otpSchema)