module.exports = (knex, tableName, columns) => async (dataToInsert) => {
  const data = {}

  if (columns) {
    Object
      .keys(columns)
      .forEach(key => {
        if (Object.prototype.hasOwnProperty.apply(dataToInsert, [key]) === false) {
          return
        }

        const value = dataToInsert[key]
        data[key] = columns.type ? columns.type(value) : value
      })
  } else {
    Object.assign(data, dataToInsert)
  }

  return knex(tableName)
    .insert(data)
}
