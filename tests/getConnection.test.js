const getConnection = require('../src/getConnection')
const Knex = require('knex')

describe('getConnection', function () {
  it('returns custom instance', () => {
    const myInstance = new Knex({ client: 'mysql' })
    const connection = getConnection({}, myInstance)
    expect(connection).toEqual(myInstance)
  })

  it('returns the same instance after initializing', () => {
    const instance = getConnection()
    expect(getConnection()).toEqual(instance)
  })
})
