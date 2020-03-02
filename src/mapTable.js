const tables = {}
const tableMapping = require('./tableMapping')
const queryMethods = require('./queryMethods')
const getKnex = require('./getConnection')

module.exports = (tableName, config) => {
  if (!tableName) {
    return tables
  }

  if (Object.prototype.hasOwnProperty.call(tables, tableName)) {
    return tables[tableName]
  }

  const defaultMethods = queryMethods()
  const definition = tableMapping(tableName, config)
  const queryFunctions = Object.assign({}, defaultMethods, definition.methods)

  const handler = {
    get (target, prop, receiver) {
      const validMethods = Object.keys(defaultMethods)

      if (validMethods.indexOf(prop) !== -1) {
        const knex = getKnex()
        return target[prop](knex, tableName, definition.columns)
      }

      return Reflect.get(...arguments)
    }
  }

  const proxiedQueryFunctions = new Proxy(queryFunctions, handler)
  tables[tableName] = { ...proxiedQueryFunctions, definition }

  return tables[tableName]
}
