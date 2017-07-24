const preAuth = require('express').Router()
const Users = require('../../db/queries/user')
const passport = require('../../../auth/passport')



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
  Users.createUser( email, username, password )
  .then( () => {
    response.redirect('login')
  })
  .catch( error => console.log('ERROR :::', error))
})

module.exports = preAuth
