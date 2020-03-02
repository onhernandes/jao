const mapColumn = require('./mapColumn')

module.exports = (tableName, columns) => {
  Object
    .keys(columns)
    .forEach(columnName => {
      const column = columns[columnName]
      columns[columnName] = mapColumn(column, tableName)
    })

  return columns
}
