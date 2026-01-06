const { matchedData } = require('express-validator')
const httpStatus = require('http-status')
const Wishlist = require('../models/wishlist.schema')
const { buildErrorObject } = require('../utils/buildErrorObject')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')

// add to wishlist 
exports.addToWishlistController = async (req, res) => {
    try {
        const { productId } = matchedData(req)
        const userId = req.user.userId

        const response = await Wishlist.create({ productId, userId })
        console.log("Response", response)

        res.status(httpStatus.status.CREATED)
            .json(buildResponse(httpStatus.status.CREATED, response, { message: 'Product added to wishlist' }))
    }
    catch (err) {
        handleError(res, err)
    }
}

// delete from wishlist 
exports.deleteFromWishlistController = async (req, res) => {
    try {
        const { productId } = matchedData(req)
        const userId = req.user.userId

        if (!productId) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'ProductId is required'
            )
        }

        const deleteItem = await Wishlist.findOneAndDelete({ userId, productId })

        if (!deleteItem) {
            buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'Product not found in wishlist'
            )
        }

        res.status(httpStatus.status.OK)
            .json(buildResponse(httpStatus.status.OK),
                {
                    wishlist: deleteItem,
                    message: "Product removed from wishlist"
                }
            )
    }
    catch (err) {
        handleError(res, err)
    }
}

// clear wishlist
exports.clearWishlistController = async (req, res) => {
    try {
        const userId = req.user.userId

        const result = await Wishlist.deleteMany(userId)

        if (result.deletedCount === 0) {
            res.status(httpStatus.status.NOT_FOUND)
                .json(buildResponse(
                    httpStatus.status.NOT_FOUND,
                    { message: "Wishlist is already empty" }
                )
                )
        }

        res.status(httpStatus.status.OK)
            .json(buildResponse(
                httpStatus.status.OK,
                { message: "All products deleted from wishlist" }))
    }
    catch (err) {
        handleError(res, err)
    }
}