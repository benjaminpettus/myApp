const city = require('express').Router()
const Cities = require('../../db/queries/city')


city.get('/', ( require, response ) => {
  respone.render( 'city' )
})



module.exports = city
