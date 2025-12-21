import { check } from "express-validator";

// signup validator
exports.signupValidator = [
    check('name')
        .exists()
        .withMessage('Name is required')
        .not()
        .isEmpty()
        .withMessage('Name can not be empty')
        .isAlphanumeric()
        .withMessage('Name can not contain numbers'),

    check('phoneNumber')
        .exists()
        .withMessage('Phone Number is required')
        .not()
        .isEmpty()
        .withMessage('Phone Number can not be empty')
        .isMobilePhone()
        .withMessage('Phone Number is Invalid'),

    (req, res, next) => validateRequest(req, res, next),
]

// login validator
exports.loginValidator = [
    check('phoneNumber')
        .exists()
        .withMessage("Phone Number is required")
        .not()
        .isEmpty()
        .withMessage('Phone Number can not be empty')
        .isMobilePhone()
        .withMessage('Phone Number is Invalid'),

    (req, res, next) => validateRequest(req, res, next)
]

// sentOtp validator
exports.sendOtpValidator = [
    check('phoneNumber')
        .exists()
        .withMessage("Phone Number is required")
        .not()
        .isEmpty()
        .withMessage('Phone Number can not be empty')
        .isMobilePhone()
        .withMessage('Phone Number is Invalid'),

    (req, res, next) => validateRequest(req, res, next)
]

// verifyOtp validator
exports.verifyOtpValidator = [
    check('otp')
        .exists()
        .withMessage('OTP is required')
        .not()
        .isEmpty()
        .withMessage('OTP can not be empty')
        .isLength({ min: 4, max: 4 })
        .withMessage("Invalid OTP")
        .isNumeric()
        .withMessage('Invalid OTP'),

    (req, res, next) => validateRequest(req, res, next)
]

// verifytoken validator
exports.verifyTokenValidator = [
    (req, res, next) => validateRequest(req, res, next)
]