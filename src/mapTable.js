const tables = {}
const tableMapping = require('./tableMapping')

module.exports = (tableName, columns, options) => {
  if (Object.prototype.hasOwnProperty.call(tables, tableName)) {
    return tables[tableName]
  }

  tables[tableName] = tableMapping(columns, options)

  return tables[tableName]
}
