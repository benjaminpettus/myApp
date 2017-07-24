const chai =require('chai')
const expect = chai.expect
const Users = require('../../../src/db/queries/user')


describe( 'user queries ', () => {

  // it('should create a user', (done) => {
  //
  //   const username = 'whatever'
  //   const password =  'whatever'
  //   const email = 'whatever@gmail.com'
  //
  //   Users.createUser( email, username, password )
  //   .then(result => console.log('result:::', result))
  //   // .then(result => console.log(" new user >>>",result))
  //   .then(done, done)
  // })

  it('should return a user by id', (done) => {
    Users.findUserById(2)
    .then(result => {
      expect(result[0].username).to.eql('yes')
    })
    .then(done, done)
  })

  it( 'should return a user by username', ( done ) => {
    const username = 'no'
    Users.findByUsername(username)
    .then( result => {
      console.log('result',result)
      expect(result[0].email).to.eql('no@no.gov')g
    })
    .then(done, done)
  })
})
