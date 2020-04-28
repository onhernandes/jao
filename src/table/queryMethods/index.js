module.exports = (connection, tableName, config) => ({
  findOne: require('./findOne')(connection, tableName, config),
  insert: require('./insert')(connection, tableName, config)
})
