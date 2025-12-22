const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        phoneNumber: {
            type: Number,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

exports.module = mongoose.model('User', userSchema);