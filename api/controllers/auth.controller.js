const User = require('../models/user.schema')
const Verification = require('../models/verification.schema')
const httpStatus = require('http-status')
const { matchedData } = require('express-validator')
const { buildErrorObject } = require('../utils/buildErrorObject')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')
const sendOTP = require('../helpers/sendTextMessage')
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// signup controller
exports.signupController = async (req, res) => {
    try {
        const data = matchedData(req)
        const phoneNumber = `+91${data.phoneNumber}`;
        console.log("Data:", data)
        const existingUser = await User.findOne({ phoneNumber })
        if (existingUser) {
            throw buildErrorObject(
                httpStatus.status.CONFLICT,
                "User Already Registered "
            )
        }
        const savedInfo = await Verification.findOne({ phoneNumber })
        console.log("savedInfo:", savedInfo)

        if (!savedInfo) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'OTP not found'
            )
        }

        if (savedInfo.validTill < Date.now()) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'OTP has expired'
            )
        }

        const enteredOtp = parseInt(data.otp)
        const savedOtp = parseInt(savedInfo.otp)

        console.log('f', enteredOtp, savedOtp)

        if (enteredOtp !== savedOtp) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'OTP does not matched'
            )
        }

        await User.create(data)
        res.status(httpStatus.status.CREATED).json(buildResponse(httpStatus.status.CREATED, {
            message: 'User Created Successfully'
        }))

        await Verification.deleteOne({ phoneNumber: data.phoneNumber })
    }
    catch (err) {
        handleError(res, err)
    }
}

// sendOtpController
exports.sendOtpController = async (req, res) => {
    try {
        const data = matchedData(req)
        const user = await User.findOne({ phoneNumber: data.phoneNumber })

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

        const response = await sendOTP(data.phoneNumber, otp)

        console.log('response:', response)

        res.status(httpStatus.status.OK)
            .json(buildResponse(httpStatus.status.OK, response, { message: "OTP_SENT" }))

        await Verification.updateOne(
            { phoneNumber: data.phoneNumber },
            {
                otp: otp,
                validTill: validTill,
            },
            { upsert: true }
        )
    }
    catch (err) {
        handleError(res, err)
    }
}

// login controller
exports.loginController = async (req, res) => {
    try {
        const data = matchedData(req)
        const phoneNumber = `+91${data.phoneNumber}`
        const existingUser = await User.findOne({ phoneNumber })

        if (!existingUser?._id) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'User does not exist'
            )
        }

        const savedInfo = await Verification.findOne({ phoneNumber })
        console.log("savedInfo:", savedInfo)

        if (!savedInfo) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'OTP not found'
            )
        }

        if (savedInfo.validTill < Date.now()) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'OTP has expired'
            )
        }

        const enteredOtp = parseInt(data.otp)
        const savedOtp = parseInt(savedInfo.otp)

        console.log('f', enteredOtp, savedOtp)

        if (enteredOtp !== savedOtp) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'OTP does not matched'
            )
        }

        const payload = {
            userId: existingUser._id
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "365d" })

        res.status(httpStatus.status.OK)
            .json(buildResponse(httpStatus.status.OK), token, { message: 'LoggedIn Successfully' })

    }
    catch (err) {
        handleError(res, err)
    }
}

// verify token Controller
exports.verifyToken = async (req, res) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '').trim()
        console.log("Token:", token)

        if (!token) {
            throw buildErrorObject(
                httpStatus.status.BAD_REQUEST,
                'Token not found'
            )
        }

        const verify = jwt.verify(token, process.env.SECRET_KEY)
        console.log("Verify", verify)

        res.status(httpStatus.status.OK)
            .json(buildResponse(httpStatus.status.OK))
    }
    catch (err) {
        handleError(res, err)
    }
}