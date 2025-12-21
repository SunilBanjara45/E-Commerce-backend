const User = require('../models/user.schema')
const httpStatus = require('http-status')
const { matchedData } = require('express-validator')
const { buildErrorObject } = require('../utils/buildErrorObject')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')


// signup controller

exports.signupController = async (req, res) => {
    try {
        const data = matchedData(req)
        const existingUser = await User.findOne('phoneNumber')
        if (existingUser) {
            throw buildErrorObject(
                httpStatus.CONFLICT,
                "User Already Registered "
            )
        }

        await User.create(req)

        res.status(httpStatus.CREATED).json(buildResponse(httpStatus.httpStatus.CREATED, {
            message: 'User Created Successfully'
        }))

    }
    catch (err) {
        handleError(res, err)
    }
}