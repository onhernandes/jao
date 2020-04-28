module.exports = (knex, tableName, columns) => async (where, attributes) => {
  let select = '*'

  if (Array.isArray(attributes)) {
    select = attributes.join(' ')
  } else if (columns) {
    select = Object
      .keys(columns)
      .join(' ')
  }

  const [item] = await knex.select(select)
    .from(tableName)
    .where(where || {})
    .limit(1)

  if (columns && item) {
    Object
      .keys(columns)
      .forEach(columnKey => {
        if (item.hasOwnProperty(columnKey) === false) { // eslint-disable-line no-prototype-builtins
          return
        }

        const value = item[columnKey]
        const column = columns[columnKey]
        item[columnKey] = column && column.type ? column.type(value) : value
      })
  }

  return item
}
