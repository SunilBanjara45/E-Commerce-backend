const express = require('express')
const Router = express.Router()

const authRoutes = require('./auth.routes')
const addressRoutes = require('./address.routes')
const cartRoutes = require('./cart.routes')
const orderRoutes = require('./order.routes')
const productRoutes = require('./product.routes')
const profileRoutes = require('./profile.routes')
const wishlistRoutes = require('./wishlist.routes')


Router.use('/auth', authRoutes)
Router.use('/address', addressRoutes)
Router.use('/cart', cartRoutes)
Router.use('/order', orderRoutes)
Router.use('/product', productRoutes)
Router.use('/profile', profileRoutes)
Router.use('/wishlist', wishlistRoutes)

module.exports = Router