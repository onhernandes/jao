const mapTable = require('./mapTable')
const getConnection = require('./getConnection')

function Jao (customConfig, knexInstance) {
  this.knex = getConnection(customConfig, knexInstance)

  return this
}

Jao.prototype.mapTable = mapTable

module.exports = Jao
