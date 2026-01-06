const { matchedData } = require('express-validator')
const Cart = require('../models/cart.schema')
const { buildErrorObject } = require('../utils/buildErrorObject')
const httpStatus = require('http-status')
const jwt = require('jsonwebtoken')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')
require('dotenv').config()

// Add to cart
exports.addToCartController = async (req, res) => {
    try {
        const data = matchedData(req)
        const userId = req.user.userId

        const response = await Cart.create({ data, userId })
        console.log("Response", response)

        res.status(httpStatus.status.CREATED)
            .json(buildResponse(httpStatus.status.CREATED, response, { message: 'Product added to cart' }))
    }
    catch (err) {
        handleError(res, err)
    }
}

// Delete from cart
// exports.deleteFromCart = async (req, res) => {
//     try {
//         const { productId } = matchedData(req)
//         const userId = req.userId

//         if (!productId) {
//             throw buildErrorObject(
//                 httpStatus.status.BAD_REQUEST,
//                 "ProductId is required"
//             )
//         }
//         const deleteCartItem = await Cart.findOneAndDelete(userId, { productId })

//         if (!deleteCartItem) {
//             throw buildErrorObject(
//                 httpStatus.status.NOT_FOUND,
//                 "Product not found"
//             )
//         }

//         res.status(httpStatus.status.OK)
//             .json(
//                 buildResponse(httpStatus.status.OK,
//                     {
//                         cart: updateCart,
//                         message: "Product deleted from cart"
//                     }
//                 )
//             )
//     }
//     catch (err) {
//         handleError(res, err)
//     }
// }

// update cart
exports.updateCartController = async (req, res) => {
    try {
        const { productId, quantity } = matchedData(req)
        const userId = req.user.userId

        if (!productId || !quantity) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                "ProductId and Quantity are required"
            )
        }
        if (quantity === 0) {
            await Cart.findOneAndDelete({
                userId,
                productId
            })
            res.status(httpStatus.status.OK)
            .json(buildResponse(httpStatus.status.OK, {message:"Product removed from cart"}))
        }

        const updateCartItem = await Cart.findOneAndUpdate(
            {
                userId,
                productId
            },
            {
                $set: { quantity }
            },
            { new: true }
        )

        if (!updateCartItem) {
            throw buildErrorObject(
                httpStatus.status.NOT_FOUND,
                "Product not found in cart"
            )
        }

        res.status(httpStatus.status.OK)
            .json(
                buildResponse(httpStatus.status.OK,
                    {
                        cart: updateCartItem,
                        message: "Cart updated successfully"
                    }
                )
            )
    }
    catch (err) {
        handleError(res, err)
    }
}