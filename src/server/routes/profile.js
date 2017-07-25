const profile = require('express').Router()
const Users = require('../../db/queries/user')



profile.get( '/', ( request, response ) => {
  const { user } = request.session.passport
  Users.findUserById(user)
  .then( result => {
    response.redirect( `/profile/${result[0].username}` )
  })
})

profile.get('/:username', ( request, response ) => {
  const { username } = request.params
  Users.findByUsername( username )
    .then( result => {
      response.render('profile', { data: result, session: request.session })
    })
})


module.exports = profile
