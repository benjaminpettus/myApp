const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


const routes = require('./server/routes')


app.set( 'view engine', 'ejs' )
app.set( 'views', path.join( __dirname + '/views' ))


app.use( bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )


app.use( express.static( 'public' ))


app.use( routes )

const server = app.listen( process.env.PORT || 3000, () => {
  console.log( "Listening on port", server.address().port )
  console.log( "Using the " + process.env.NODE_ENV + " environment")
} )
