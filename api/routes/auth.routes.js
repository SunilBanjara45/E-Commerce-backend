const express = require('express')
const trimRequest = require('trim-request')
const { signupController, sendOtpController, sendOtpLoginController, loginController } = require('../controllers/auth.controller')
const { signupValidator, sendOtpValidator, loginValidator, } = require('../validators/auth.validator')

const router = express.Router()

router.post(
    '/signup',
    trimRequest.all,
    signupValidator,
    signupController
)

router.post(
    '/send-otp',
    trimRequest.all,
    sendOtpValidator,
    sendOtpController
)

router.post(
    '/sent-loginOtp',
    trimRequest.all,
    sendOtpValidator,
    sendOtpLoginController,
)

router.post(
    '/login',
    trimRequest.all,
    loginValidator,
    loginController,
)

module.exports = router
