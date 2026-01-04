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

// product validator
exports.productValidator = [
  check('productName')
    .exists().withMessage("Product name is required")
    .notEmpty().withMessage("Product name can not be empty"),

  check('productImage')
    .exists().withMessage('Product image is required')
    .notEmpty().withMessage('Product image can not be empty'),

  check('mrpPrice')
    .exists().withMessage("MRP is reuired")
    .notEmpty().withMessage("MRP can not be empty")
    .isNumeric().withMessage("MRP is invalid"),

  check('sellingPrice')
    .exists().withMessage("Selling Price is reuired")
    .notEmpty().withMessage("Selling Price can not be empty")
    .isNumeric().withMessage("Selling Price is invalid"),

  check('description')
    .exists().withMessage("Description is required")
    .notEmpty().withMessage("Description can not be empty"),

  check('generalInfo')
    .exists().withMessage("General Info is required")
    .notEmpty().withMessage("General Info can not be empty"),

  check('warrantyInfo')
    .exists().withMessage("Warranty Info is required")
    .notEmpty().withMessage("Warranty Info can not be empty"),
]

// cart validator
exports.cartValidator = [
  check("productId")
    .exists().withMessage("ProductId is required")
    .notEmpty().withMessage("productId can not be empty"),

  check("quantity")
    .exists().withMessage('Quantity is required')
    .notEmpty().withMessage('Quantity can not be empty')
    .isNumeric().withMessage('Quantity is invalid'),

  validateRequest,
];

// verifyToken validator
exports.verifyTokenValidator = [validateRequest];
