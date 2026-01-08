const { check } = require("express-validator");
const { validateRequest } = require("../utils/validateRequest");
const { exists } = require("../models/user.schema");


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

  check("otp")
    .exists().withMessage("OTP is required")
    .notEmpty().withMessage("OTP can not be empty")
    .isMobilePhone().withMessage("OTP is Invalid"),

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

// Cart validator
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

// updateCart validator
exports.updateCartValidator = [
  check("productId")
    .exists().withMessage("ProductId is required")
    .notEmpty().withMessage("productId can not be empty"),

  check("quantity")
    .exists().withMessage("Quantity is required")
    .notEmpty().withMessage("Quantity can not be empty")
    .isNumeric().withMessage("Quantity is invalid"),

  validateRequest,
];

// wishlist validator
exports.wishlistValidator = [
  check("productId")
    .exists().withMessage("ProductId is required")
    .notEmpty().withMessage("productId can not be empty"),

  validateRequest,
];

// add address validator
exports.addressValidator = [
  check('fullname')
    .exists().withMessage('Fullname is required')
    .notEmpty().withMessage('Fullname can not be empty')
    .isAlpha().withMessage('Fullname is invalid'),

  check("phoneNumber")
    .exists().withMessage("Phone number is required")
    .notEmpty().withMessage("Phone number can not be empty")
    .isNumeric().withMessage("Phone number is invalid"),

  check("pincode")
    .exists().withMessage("Pincode is required")
    .notEmpty().withMessage("Pincode can not be empty")
    .isNumeric().withMessage("Pincode is invalid"),

  check('addressLine')
    .exists().withMessage('AddressLine is required')
    .notEmpty().withMessage('AddressLine can not be empty'),

  check('city')
    .exists().withMessage('City is required')
    .notEmpty().withMessage('City can not be empty')
    .isAlpha().withMessage('City is invalid'),

  check('state')
    .exists().withMessage('State is required')
    .notEmpty().withMessage('State can not be empty')
    .isAlpha().withMessage('State is invalid'),

  check('isDefault')
    .isBoolean().withMessage('Default address is invalid'),

  validateRequest,
]

// delete address validator
exports.deleteAddressValidator = [
  check(productId)
    .exists().withMessage("Product id is required")
    .notEmpty().withMessage("Product id can not be empty"),

  validateRequest,
]

// user validator
exports.userValidator = [
  check('name')
    .exists().withMessage('Name is required')
    .notEmpty().withMessage('Name can not be empty')
    .isAlpha().withMessage('Name is invalid'),

  check("phoneNumber")
    .exists().withMessage("Phone number is required")
    .notEmpty().withMessage("Phone number can not be empty")
    .isNumeric().withMessage("Phone number is invalid"),

  check("otp")
    .exists().withMessage("OTP is required")
    .notEmpty().withMessage("OTP can not be empty")
    .isNumeric().withMessage("OTP is invalid"),

  validateRequest,
]

// profile validator
exports.profileValidator = [
  check('name')
    .exists().withMessage('Name is required')
    .notEmpty().withMessage('Name can not be empty')
    .isAlpha().withMessage('Name is invalid'),

  check('email')
    .exists().withMessage('Email is required')
    .notEmpty().withMessage('Email can not empty')
    .isEmail().withMessage('Email is invalid'),

  check('profileImage')
    .exists().withMessage('Profile Image is required')
    .notEmpty().withMessage('Profile Image can not be empty'),

  check("phoneNumber")
    .exists().withMessage("Phone number is required")
    .notEmpty().withMessage("Phone number can not be empty")
    .isNumeric().withMessage("Phone number is invalid"),

]

// order validator
exports.orderValidator = [
  check('userId')
    .exists().withMessage('User Id is required')
    .notEmpty().withMessage('User Id can not be empty')
    .isNumeric().withMessage('User Id is invalid'),

  check('productId')
    .exists().withMessage('Product Id is required')
    .notEmpty().withMessage('Product Id can not be empty')
    .isNumeric().withMessage('Product Id is invalid'),

  check("phoneNumber")
    .exists().withMessage("Phone number is required")
    .notEmpty().withMessage("Phone number can not be empty")
    .isNumeric().withMessage("Phone number is invalid"),

  check("pincode")
    .exists().withMessage("Pincode is required")
    .notEmpty().withMessage("Pincode can not be empty")
    .isNumeric().withMessage("Pincode is invalid"),

  check('addressLine')
    .exists().withMessage('AddressLine is required')
    .notEmpty().withMessage('AddressLine can not be empty'),

  check('city')
    .exists().withMessage('City is required')
    .notEmpty().withMessage('City can not be empty')
    .isAlpha().withMessage('City is invalid'),

  check('state')
    .exists().withMessage('State is required')
    .notEmpty().withMessage('State can not be empty')
    .isAlpha().withMessage('State is invalid'),

  validateRequest,
]

// delete order
exports.deleteOrderValidator = [
  check('orderId')
  .exists().withMessage('Order Id is required')
  .notEmpty().withMessage('Order Id can not be empty')
  .isNumeric().withMessage('Order Id is invalid')
]

// verifyToken validator
exports.verifyTokenValidator = [validateRequest];