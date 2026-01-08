const { matchedData } = require('express-validator')
const Order = require('../models/order.schema')
const httpStatus = require('http-status')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')
const { buildErrorObject } = require('../utils/buildErrorObject')

// create order
exports.orderController = async (req, res) => {
    try {
        const data = matchedData(req)
        const userId = req.user.userId

        const newOrder = await Order.create({ userId, data })

        res.status(httpStatus.status.CREATED)
            .json(buildResponse(httpStatus.status.CREATED,
                {
                    order: newOrder,
                    message: "Order placed successfully"
                }
            ))

    } catch (err) {
        handleError(res, err)
    }
}

// delete order
exports.deleteOrderController = async (req, res) => {
    try {
        const { orderId } = matchedData(req)

        const deleteOrder = await Order.findByIdAndDelete(orderId)

        if (!deleteOrder) {
            throw buildErrorObject(httpStatus.status.BAD_REQUEST),
            "order not found"
        }

        res.status(httpStatus.status.CREATED)
            .json(buildResponse(httpStatus.status.CREATED,
                {
                    message: "Order deleted successfully"
                }
            ))

    } catch (err) {
        handleError(res, err)
    }
}