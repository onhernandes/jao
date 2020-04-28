const getInsert = require('../../../src/table/queryMethods/insert')

describe('insert', function () {
  it('applies only listed columns', async function () {
    const columns = {
      first_name: {
        type: String
      }
    }

    const insert = jest.fn()
    const knex = jest.fn(() => ({ insert }))
    const insertIntoTable = getInsert(knex, 'test', columns)

    const myData = {
      first_name: 'onhernandes',
      last_name: 'offhernandes its real'
    }

    await insertIntoTable(myData)

    expect(insert).toHaveBeenCalledWith({ first_name: 'onhernandes' })
  })

  it('inserts all data withou checking for columns', async function () {
    const insert = jest.fn()
    const knex = jest.fn(() => ({ insert }))
    const insertIntoTable = getInsert(knex, 'test')

    const myData = {
      first_name: 'onhernandes',
      last_name: 'offhernandes its real'
    }

    await insertIntoTable(myData)

    expect(insert).toHaveBeenCalledWith(myData)
  })
})
