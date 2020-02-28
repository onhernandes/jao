const Knex = require('knex')
let knex
const initialConfig = {
  host: 'localhost',
  user: '',
  password: '',
  database: 'jao'
}

module.exports = (customConfig, instance) => {
  if (knex) {
    return knex
  }

  if (instance) {
    knex = instance
    return knex
  }

  const config = Object.assign({}, initialConfig, customConfig || {})
  knex = Knex({ client: 'mysql2', connection: config })

  return knex
}
