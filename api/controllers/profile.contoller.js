const { matchedData } = require('express-validator')
const User = require('../models/user.schema')
const httpStatus = require('http-status')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')
const { buildErrorObject } = require('../utils/buildErrorObject')

// profile controller
exports.profileController = async (req, res) => {
    try {
        const data = matchedData(req)
        const userId = req.user.userId

        updateUser = await User.findOneAndUpdate({ userId, data }, { new: true })

        if (!updateUser) {
            throw buildErrorObject(httpStatus.status.NOT_FOUND),
            'User not found'
        }

        res.status(httpStatus.status.CREATED)
            .json(buildResponse(httpStatus.status.CREATED),
                {
                    updateUser,
                    message: 'Profile added successfully'
                }
            )
    }
    catch (err) {
        handleError(res, err)
    }
}
