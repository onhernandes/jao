const filter = require('./filter')
const checkType = require('./checkType')

module.exports = (column, tableName) => {
  column = filter(column)

  if (!checkType(column)) {
    throw new Error(`Invalid column type! Received ${column.type} for table ${tableName}`)
  }

  return column
}
