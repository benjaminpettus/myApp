const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../src/db/queries/user')
const bcrypt = require('bcrypt')


passport.use( new LocalStrategy({
    session: true
  },
  (username, password, done) => {
    User.findByUsername( username )
    .then( user => {
      if ( !user[0] ) {
        return done( null, false, { message: 'incorrect username' })
      }
      bcrypt.compare( password, user[0].password, ( err, response) => {
        if(!response){
          return done(null, false)
        }
        // request.session.user = user[0]
        return done( null, user[0] )
      })
    })
    .catch( error => {
      console.error( error )
      done(error)
    })
  }
))

passport.serializeUser(( user, done ) => {
  done( null, user.id )
})

passport.deserializeUser(( id, done) => {
  User.findUserById( id )
  .then((user, error) => {
    done(error, user)
  })
})


module.exports = passport
