const { query } = require("express-validator")
const validateRequest = require('../utils/validateRequest')

exports.uploadValidator = [
    query('type')
        .optional()
        .notEmpty()
        .isEmpty()
        .withMessage('IS_EMPTY').trim(),
    (req, res, next) => validateRequest(req, res, next)
]