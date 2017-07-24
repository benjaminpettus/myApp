const knex = require('../knex')


const createUser = ( email, username, password ) => {
  return knex.select().from('users').where({username: username})
    .then( result => {
      console.log('result >>>>>>',result.length)
      if(!result.length) {
        return knex('users')
        .insert({
          email:email,
          username: username,
          password: password
        })
        .returning('*')
      }
    })
    .then(result =>  result )
    .catch( error => error )
}

const findUserById = (id) => {
  return knex.select().from('users').where({ id: id})
  .then( result => result )
  .catch(error => error)
}

const findByUsername = ( username ) => {
  return knex.select().from('users').where({ username: username })
  .then(result => result )
  .catch( error => error )
}

module.exports = {
  createUser,
  findUserById,
  findByUsername,
}
