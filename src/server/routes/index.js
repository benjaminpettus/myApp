const router = require('express').Router()
const preAuth = require('./pre-auth')
const profile = require('./profile')
const city = require('./city')
const post = require('./post')



const sessionChecker = (request, response, next) => {
  if( !(request.session.passport && request.cookies.user_sid)) {
    response.redirect('/login')
  } else {
    next()
  }
}

router.use(preAuth)
router.use(sessionChecker)

router.use('/profile', profile)
router.use('/city', city)
router.use('/post', post)


module.exports = router
