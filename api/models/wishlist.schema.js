const mongoose = require('mongoose')
const Product = require('./product.schema')
const User = require('./user.schema')

const wishlistSchema = new mongoose.Schema(
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
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Wishlist', wishlistSchema)