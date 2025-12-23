const User = require('../models/user.schema')
const httpStatus = require('http-status')
const { matchedData } = require('express-validator')
const { buildErrorObject } = require('../utils/buildErrorObject')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')
const { sendMail } = require('../helpers/sendMail')


// signup controller
exports.signupController = async (req, res) => {
    try {
        const data = matchedData(req)
        const existingUser = await User.findOne({ phoneNumber: data.phoneNumber })
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

// sendOtpController
exports.sendOtpController = async (req, res) => {
    try {
        const data = matchedData(req)
        const user = await User.findOne({ phoneNumber:phoneNumber})

        if (user?._id) {
            throw buildErrorObject(httpStatus.CONFLICT, "User Already Exists")
        }

        const otp = otpGenerator.generate(4, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false,
            digits: true,
        })

        const validTill = new Date(new Date().getTime() + 30 * 60000)

        res
            .status(httpStatus.OK)
            .json(buildResponse(httpStatus.OK, { message: OTP_SENT }))
    }
    catch (err) {
        handleError(err)
    }
}

exports.loginController = async (req, res) => {
    const data = matchedData(req)
}