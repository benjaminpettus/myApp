// Update with your config settings.
require('dotenv').config({ path: __dirname + '/../../.env' })

module.exports = {
    client: 'pg',
    connection: process.env.DB_DEV,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
}

  // test: {
  //   client: 'postgresql',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   },
  //   migrations: {
  //     tableName: 'migrations'
  //   },
  //   seed: {
  //     tableName: 'seed'
  //   }
  // },
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
// ]
//     migrations: {
//       tableName: 'knex_migrations'
//     }
