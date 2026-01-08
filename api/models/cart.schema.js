const mongoose = require('mongoose')
const Product = require('./product.schema')
const User = require('./user.schema')

const cartSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Cart', cartSchema)