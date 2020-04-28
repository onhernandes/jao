const table = require('./table')
const getConnection = require('./getConnection')

function Jao (customConfig, knexInstance) {
  this.knex = getConnection(customConfig, knexInstance)
  this.table = table(this.knex)

  return this
}

module.exports = Jao
