const profile = require('express').Router()
const Users = require('../../db/queries/user')



profile.get( '/', ( request, response ) => {
  response.render( 'profile' )
})



module.exports = profile
