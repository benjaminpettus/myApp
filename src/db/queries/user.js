const knex = require('../knex')


const createUser = ( email, username, password ) => {
  return knex.select().from('users').where({username: username})
    .then( result => {
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
  .then( result => result )
  .catch( error => error )
}

const userAndPosts = ( username ) => {
  return knex('users')
    .leftOuterJoin('posts', 'users.id', 'posts.user_id')
    .where({ username: username })
    .leftOuterJoin('cities', 'posts.cities_id', 'cities.id')
    .select('users.id AS userId', 'username', 'users.created_on AS memberSince', 'users.email', 'users.current_city', 'posts.id', 'cities.name', 'posts.title', 'posts.content')
    .then( result => {
      const userObj = {
        id: result[0].userId,
        username: result[0].username,
        current_city: result[0].current_city,
        email: result[0].email,
        created_at: result[0].created_on,
        posts: result.map(post => {
          return {
            id: post.id,
            title: post.title,
            content: post.content,
            city: post.name,
            created_at: post.created_on
          }
        })
      }
      return userObj
      })
    .then( userObj => userObj )
    .catch( error => error )
}


// const findUserPosts = ( userId ) => {
//   return knex.select()from('posts').where({ user_id: userId })
//   .then( result => result )
//   .catch( error => error )
// }




module.exports = {
  createUser,
  findUserById,
  findByUsername,
  userAndPosts
}
