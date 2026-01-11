const express =require('express')
const trimRequest = require('trim-request')
const { addToCartController, updateCartController } = require("../controllers/cart.controller")
const { cartValidator, updateCartValidator } = require("../validators/auth.validator")
const router = express.Router()

router.post(
    '/addToCart',
    trimRequest.all,
    cartValidator,
    addToCartController
)

router.put(
    '/update-cart',
    trimRequest.all,
    updateCartValidator,
    updateCartController
)

module.exports = router