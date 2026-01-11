const express =require('express')
const trimRequest = require('trim-request')
const { productController } = require("../controllers/product.controller")
const { productValidator } = require("../validators/auth.validator")
const router = express.router()

router.post(
    '/product',
    trimRequest.all,
    productValidator,
    productController
)

module.exports = router