const { matchedData } = require('express-validator')
const Cart = require('../models/cart.schema')
const { buildErrorObject } = require('../utils/buildErrorObject')
const httpStatus = require('http-status')
const jwt = require('jsonwebtoken')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')
require('dotenv').config()

// Add cart
exports.addToCart = async (req, res) => {
    try {
        const data = matchedData(req)
        const userId = req.userId

        const response = await Cart.create({ data, userId })
        console.log("Response", response)

        res.status(httpStatus.status.CREATED)
            .json(buildResponse(httpStatus.status.CREATED, response, { message: 'Product added to cart' }))
    }
    catch (err) {
        handleError(res, err)
    }
}