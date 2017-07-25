const preAuth = require('express').Router()
const Users = require('../../db/queries/user')
const passport = require('../../../auth/passport')
const bcrypt = require('bcrypt')



preAuth.get( '/', ( request, response ) => {
  response.render( 'index' )
})

preAuth.get( '/login', ( request, response ) => {
  response.render( 'login' )
})

preAuth.post( '/login',
  passport.authenticate('local',
    { successRedirect: '/profile',
      failureRedirect: '/login'
    })
)

preAuth.get( '/register', ( request, response) => {
  response.render( 'register')
})

preAuth.post( '/register', (request, response) => {
  const { email, username, password } = request.body
  bcrypt.hash(password, 10, (error, hash) => {
    Users.createUser( email, username, hash )
    .then( () => {
      console.log('response _+_+_+_+_+ ',response )
      response.redirect('login')
    })
  })
})

preAuth.get( '/logout', ( request, response ) => {
    response.clearCookie('user_sid')
    .redirect('/login')
})

module.exports = preAuth
