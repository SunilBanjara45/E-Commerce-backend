const mongoose = require('mongoose')
const User = require('./user.schema')
const Product = require('./product.schema')

const ratingAndReviewsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Product
        },
        comment: {
            type: String,
            required: ture
        },
        rating: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('RatingAndReviews', ratingAndReviewsSchema)