const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../src/db/queries/user')
const bcrypt = require('bcrypt')


passport.use( new LocalStrategy(
  (username, password, done) => {
    User.findByUsername( username )
    .then( user => {
      console.log('userOBJ >>>>',user[0])
      if ( !user[0] ) {
        return done( null, false, { message: 'incorrect username' })
      }
      bcrypt.compare( password, user[0].password, ( err, response) => {
        console.log('response +_+_+_+',response)
        if(!response){
          return done(null, false)
        }
        return done( null, user[0] )
      })
    })
    .catch( error => {
      console.error( error )
      done(error)
    })
  }
))



module.exports = passport
