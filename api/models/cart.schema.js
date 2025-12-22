const mongoose = require('mongoose')
const Product = require('./product.schema')
const User = require('./user.schema')

const cartSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Product,
            required: ture,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: ture
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

exports.module = mongoose.model('Cart', cartSchema)