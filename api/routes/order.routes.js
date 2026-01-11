const express =require('express')
const trimRequest = require('trim-request')
const { orderController, deleteOrderController } = require("../controllers/order.controller")
const { orderValidator, deleteOrderValidator } = require("../validators/auth.validator")
const router = express.router()

router.post(
    '/create-order',
    trimRequest.all,
    orderValidator,
    orderController
)

router.post(
    '/delete-order',
    trimRequest.all,
    deleteOrderValidator,
    deleteOrderController
)

module.exports = router