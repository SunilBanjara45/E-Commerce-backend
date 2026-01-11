const express =require('express')
const trimRequest = require('trim-request')
const { addAddressController, deleteAddressController, updateAddressController } = require("../controllers/address.controller")
const { addressValidator, deleteAddressValidator } = require("../validators/auth.validator")
const router = express.Router()

router.post(
    '/add-address',
    trimRequest.all,
    addressValidator,
    addAddressController
)

router.delete(
    '/delete-address',
    trimRequest.all,
    deleteAddressValidator,
    deleteAddressController
)

router.put(
    '/delete-address',
    trimRequest.all,
    addressValidator,
    updateAddressController
)

module.exports = router