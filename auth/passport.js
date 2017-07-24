const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../src/db/queries/user')


passport.use( new LocalStrategy(
  (username, password, done) => {
    User.findByUsername( username ), ( error, user ) => {
      if ( error ) { return done( error ) }
      if ( !user ) {
        return done( null, false, { message: 'incorrect username' })
      }
      if ( !user.ValidPassword( password ) ) {
        return done( null, false, { message: 'Incorrect password' } )

      }
      return done( null, user )
    }
  }
))



module.exports = passport
