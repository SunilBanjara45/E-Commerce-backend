const express =require('express')
const trimRequest = require('trim-request')
const { addToWishlistController, deleteFromWishlistController, clearWishlistController } = require("../controllers/wishlist.controller")
const { wishlistValidator } = require("../validators/auth.validator")
const router = express.Router()

router.post(
    '/addToWishlist',
    trimRequest.all,
    wishlistValidator,
    addToWishlistController
)

router.delete(
    '/deleteItemFromWishlist',
    trimRequest.all,
    wishlistValidator,
    deleteFromWishlistController
)

router.delete(
    '/clearWishlist',
    trimRequest.all,
    wishlistValidator,
    clearWishlistController
)

module.exports = router