const { matchedData } = require('express-validator')
const Product = require('../models/product.schema')
const { buildResponse } = require('../utils/buildResponse')
const httpStatus = require('http-status')
const { handleError } = require('../utils/handleError')

exports.productController = async (req, res) => {
    try {
        const data = matchedData(req)

        const response = await Product.create(data)
        console.log("ProductInfo:",response)
        res.status(httpStatus.status.CREATED)
            .json(buildResponse(httpStatus.status.CREATED, response, { message: 'Product created successfully' }))
    }
    catch (err) { 
        handleError(res, err)
    }
}