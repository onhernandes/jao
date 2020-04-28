const tables = {}
const queryMethods = require('./queryMethods')

module.exports = connection => (tableName, config) => {
  if (!tableName) {
    return tables
  }

  if (Object.prototype.hasOwnProperty.call(tables, tableName)) {
    return tables[tableName]
  }

  tables[tableName] = queryMethods(connection, tableName, config)

  return tables[tableName]
}
