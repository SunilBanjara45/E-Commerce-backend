const { matchedData } = require('express-validator')
const Address = require('../models/address.schema')
const httpStatus = require('http-status')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')
const { buildErrorObject } = require('../utils/buildErrorObject')

// add address controller
exports.addAddressController = async (req, res) => {
    try {
        const data = matchedData(req)
        const userId = req.user.userId

        if (data.isDefault === true) {
            await Address.updateMany(
                userId,
                {
                    $set: { isDefault: false }
                }
            )
        }

        newAddress = await Address.create(data)

        res.status(httpStatus.status.CREATED)
            .json(buildResponse(httpStatus.status.CREATED),
                {
                    newAddress,
                    message: 'Address added successfully'
                }
            )
    }
    catch (err) {
        handleError(res, err)
    }
}

// delete address controller
exports.deleteAddressController = async (req, res) => {
    try {
        const data = matchedData(req)
        const addressId = data._id

        if (!AddressId) {
            throw buildErrorObject(httpStatus.status.BAD_REQUEST),
            "Address id is required"
        }

        const deleteAddress = await Address.findByIdAndDelete({ addressId })

        if (!deleteAddress) {
            throw buildErrorObject(httpStatus.status.NOT_FOUND),
            "Address not found"
        }

        res.status(httpStatus.status.OK)
            .json(buildResponse(httpStatus.status.OK),
                {
                    message: 'Address deleted successfully'
                }
            )
    }
    catch (err) {
        handleError(res, err)
    }
}

// update Address 
exports.updateAddressController = async (req, res) => {
    try {
        const data = matchedData(req)
        const addressId = data.addressId

        if (data.isDefault === true) {
            await Address.updateMany(
                userId,
                {
                    $set: { isDefault: false }
                }
            )
        }

        updatedAddress = await Address.findByIdAndUpdate({ addressId })

        res.status(httpStatus.status.OK)
            .json(buildResponse(httpStatus.status.OK),
                {
                    updatedAddress,
                    message: 'Address updated successfully'
                }
            )
    }
    catch (err) {
        handleError(res, err)
    }
}