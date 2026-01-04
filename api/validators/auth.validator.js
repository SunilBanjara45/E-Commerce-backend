const { check } = require("express-validator");
const { validateRequest } = require("../utils/validateRequest");


// signup validator
exports.signupValidator = [
  check("name")
    .exists().withMessage("Name is required")
    .notEmpty().withMessage("Name can not be empty")
    .isAlpha().withMessage("Name can not contain numbers"),

  check("phoneNumber")
    .exists().withMessage("Phone Number is required")
    .notEmpty().withMessage("Phone Number can not be empty")
    .isMobilePhone().withMessage("Phone Number is Invalid"),

  check("otp")
    .exists().withMessage("OTP is required")
    .notEmpty().withMessage("OTP can not be empty")
    .isLength({ min: 4, max: 4 }).withMessage("Invalid OTP")
    .isNumeric().withMessage("Invalid OTP"),

  validateRequest,
];

// login validator
exports.loginValidator = [
  check("phoneNumber")
    .exists().withMessage("Phone Number is required")
    .notEmpty().withMessage("Phone Number can not be empty")
    .isMobilePhone().withMessage("Phone Number is Invalid"),

  validateRequest,
];

// sendOtp validator
exports.sendOtpValidator = [
  check("phoneNumber")
    .exists().withMessage("Phone Number is required")
    .notEmpty().withMessage("Phone Number can not be empty")
    .isMobilePhone().withMessage("Phone Number is Invalid"),

  validateRequest,
];

// verifyToken validator
exports.verifyTokenValidator = [validateRequest];
