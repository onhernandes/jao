const mapTable = require('./mapTable')
const initialConfig = {
  host: 'localhost',
  user: '',
  password: '',
  database: 'jao'
}

function Jao (customConfig, knexInstance) {
  const config = Object.assign({}, initialConfig, customConfig || {})
  this.knex = knexInstance || require('knex')({ client: 'mysql2', connection: config })

  return this
}

Jao.prototype.mapTable = mapTable

module.exports = Jao
