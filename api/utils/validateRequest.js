const {validationResult} = require('express-validator')
const httpStatus = require('http-status')

exports.validateRequest = (req, res, next)=>{
    try {
        validationResult(req).throw()
        next()
    } 
    catch (error) {
        res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
            success:false,
            code:httpStatus.UNPROCESSABLE_ENTITY,
            ...error
        })
    }
}