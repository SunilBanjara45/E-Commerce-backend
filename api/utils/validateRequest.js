const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

/**
 * Express validation middleware
 */
const validateRequest = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (error) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
      success: false,
      code: httpStatus.UNPROCESSABLE_ENTITY,
      errors: error.array(), // ✅ better than ...error
    });
  }
};

module.exports = {
  validateRequest,
};
