const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        productId: {
            type: Number,
            required: true
        },
        finalPrice: {
            type: Number,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        addressLine: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true
        },
    }
)