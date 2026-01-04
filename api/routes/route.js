const express = require('express')
const { signupController, sendOtpController } = require('../controllers/auth.controller')
const trimRequest = require('trim-request')
const { signupValidator, sendOtpValidator } = require('../validators/auth.validator')
const Router = express.Router()

Router.post(
    '/signup',
    trimRequest.all,
    signupValidator,
    signupController
)

Router.post(
    '/send-otp',
    trimRequest.all,
    sendOtpValidator,
    sendOtpController
)


module.exports = Router