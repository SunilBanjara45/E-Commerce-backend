const express = require('express')
const { signupController, sendOtpController } = require('../controllers/auth.controller')
const trimRequest = require('trim-request')
const { signupValidator, sendOtpValidator, productValidator } = require('../validators/auth.validator')
const { productController } = require('../controllers/product.controller')
const { addToCart } = require('../controllers/cart.controller')
const Router = express.Router()

Router.post(
    '/signup',
    trimRequest.all,
    signupValidator,
    signupController
)

Router.post(
    '/send-otp',
    trimRequest.all,
    sendOtpValidator,
    sendOtpController
)

Router.post(
    '/product',
    trimRequest.all,
    productValidator,
    productController
)

Router.post(
    '/addToCart',
    trimRequest.all,
    cartValidator,
    addToCart
)


module.exports = Router