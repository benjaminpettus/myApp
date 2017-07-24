const router = require('express').Router()
const preAuth = require('./pre-auth')
const profile = require('./profile')


router.use(preAuth)
router.use('/profile', profile)

module.exports = router
