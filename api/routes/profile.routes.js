const express =require('express')
const trimRequest = require('trim-request')
const { profileController } = require("../controllers/profile.contoller")
const { profileValidator } = require("../validators/auth.validator")
const router =express.Router()

router.put(
    '/profile-update',
    trimRequest.all,
    profileValidator,
    profileController
)

module.exports = router