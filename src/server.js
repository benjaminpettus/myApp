const express = require('express')
const app = express()
require('dotenv').config({path: '../.env'})
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('../auth/passport')
const session = require('express-session')
const path = require('path')
const routes = require('./server/routes')





app.set( 'view engine', 'ejs' )
app.set( 'views', path.join( __dirname + '/views' ))


app.use( bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )
app.use(cookieParser())
//
app.use(session({
  key: 'user_sid',
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 500000
  }
}))


app.use( express.static( 'public' ))

app.use(passport.initialize())
app.use(passport.session())

app.use(( request, response, next ) => {
  if(!( request.cookies && request.cookies.user_sid )) {
    response.clearCookie( 'user_sid' )
  }
  next()
})

app.use( routes )

const server = app.listen( process.env.PORT || 3000, () => {
  console.log( "Listening on port", server.address().port )
  console.log( "Using the " + process.env.NODE_ENV + " environment")
} )
