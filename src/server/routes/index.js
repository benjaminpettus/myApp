const router = require('express').Router()
const preAuth = require('./pre-auth')


router.use(preAuth)

module.exports = router
