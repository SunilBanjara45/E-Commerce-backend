const express = require('express')
const { signupController, sendOtpController, sendOtpLoginController } = require('../controllers/auth.controller')
const trimRequest = require('trim-request')
const { signupValidator, sendOtpValidator, productValidator, updateCartValidator, addressValidator, deleteAddressValidator } = require('../validators/auth.validator')
const { productController } = require('../controllers/product.controller')
const { addToCart, updateCartController } = require('../controllers/cart.controller')
const { addToWishlistController, deleteFromWishlistController, clearWishlistController } = require('../controllers/wishlist.controller')
const { addAddressController, deleteAddressController, updateAddressController } = require('../controllers/address.controller')
const { profileController } = require('../controllers/profile.contoller')
const Router = express.Router()

Router.post(
    '/signup',
    trimRequest.all,
    signupValidator,
    signupController
)

Router.post(
    '/send-otp',
    trimRequest.all,
    sendOtpValidator,
    sendOtpController
)

Router.post(
    '/sent-loginOtp',
    trimRequest.all,
    sendOtpValidator,
    sendOtpLoginController,
)

Router.post(
    '/login',
    trimRequest.all,
    loginValidator,
    loginController,
)

// product
Router.post(
    '/product',
    trimRequest.all,
    productValidator,
    productController
)

// Cart
Router.post(
    '/addToCart',
    trimRequest.all,
    cartValidator,
    addToCart
)

Router.put(
    '/update-cart',
    trimRequest.all,
    updateCartValidator,
    updateCartController
)

// Wishlist
Router.post(
    '/addToWishlist',
    trimRequest.all,
    wishlistValidator,
    addToWishlistController
)

Router.delete(
    '/deleteItemFromWishlist',
    trimRequest.all,
    wishlistValidator,
    deleteFromWishlistController
)


Router.delete(
    '/clearWishlist',
    trimRequest.all,
    clearWishlistController
)

// address
Router.post(
    '/add-address',
    trimRequest.all,
    addressValidator,
    addAddressController
)

Router.delete(
    '/delete-address',
    trimRequest.all,
    deleteAddressValidator,
    deleteAddressController
)

Router.put(
    '/delete-address',
    trimRequest.all,
    addressValidator,
    updateAddressController
)

// profile update
Router.put(
    '/profile-update',
    trimRequest.all,
    profileValidator,
    profileController
)

module.exports = Router