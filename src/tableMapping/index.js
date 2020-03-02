const mapColumns = require('./mapColumns')

module.exports = (tableName, config) => {
  config = config || {}
  config.tableIdentifier = tableName
  config.columns = config.columns || {}
  config.columns = mapColumns(tableName, config.columns)

  if (!config.disableIdColumn) {
    config.columns.id = { type: 'increments' }
  }

  if (config.alias) {
    config.tableIdentifier = config.alias
  }

  return config
}
