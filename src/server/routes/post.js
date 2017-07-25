const post = require('express').Router()
const Posts = require('../../db/queries/post')


post.get( '/', ( request, response ) => {
  response.render( 'post' )
})

module.exports = post
