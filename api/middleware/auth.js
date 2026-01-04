const jwt = require('jsonwebtoken')
const { handleError } = require('../utils/handleError')

exports.auth = async (req, res) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '').trim()

        if (!token) {
            throw buildErrorObject(httpStatus.status.BAD_REQUEST, 'Token is missing')
        }

        const verify = jwt.verify(token, process.env.SECRET_KEY)
        console.log("verify:", verify)

        req.user = verify
        next()
    }
    catch (err) {
        handleError(res, req)
    }
}