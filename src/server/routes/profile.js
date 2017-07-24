const profile = require('express').Router()
const Users = require('../../db/queries/user')



profile.get( '/', ( request, response ) => {
  console.log('request.session.passport &&&&',request.session.passport)
  console.log('request.cookies ()()()()',request.cookies)
  response.render( 'profile' )
})



module.exports = profile
