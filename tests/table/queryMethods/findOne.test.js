const findOne = require('../../../src/table/queryMethods/findOne')

describe('findOne', function () {
  describe('select', function () {
    it('applies *', async function () {
      const limit = jest.fn(() => ([]))
      const where = jest.fn(() => ({ limit }))
      const from = jest.fn(() => ({ where }))
      const select = jest.fn(() => ({ from }))
      const knex = { select }
      await findOne(knex, 'test')({})

      expect(from).toHaveBeenCalled()
      expect(select).toHaveBeenCalled()
      expect(where).toHaveBeenCalled()
      expect(limit).toHaveBeenCalled()
    })

    it('applies pre-defined columns', async function () {
      const limit = jest.fn(() => ([]))
      const where = jest.fn(() => ({ limit }))
      const from = jest.fn(() => ({ where }))
      const select = jest.fn(() => ({ from }))
      const knex = { select }
      const columns = {
        first_name: {},
        last_name: {}
      }

      await findOne(knex, 'test', columns)({})

      expect(select).toHaveBeenCalledWith(
        Object.keys(columns).join(' ')
      )

      expect(from).toHaveBeenCalled()
      expect(select).toHaveBeenCalled()
      expect(where).toHaveBeenCalled()
      expect(limit).toHaveBeenCalled()
    })

    it('applies selected columns with pre-defined columns', async function () {
      const limit = jest.fn(() => ([]))
      const where = jest.fn(() => ({ limit }))
      const from = jest.fn(() => ({ where }))
      const select = jest.fn(() => ({ from }))
      const knex = { select }
      const columns = {
        first_name: {},
        last_name: {}
      }

      await findOne(knex, 'test', columns)({}, ['first_name'])

      expect(select).toHaveBeenCalledWith('first_name')

      expect(from).toHaveBeenCalled()
      expect(select).toHaveBeenCalled()
      expect(where).toHaveBeenCalled()
      expect(limit).toHaveBeenCalled()
    })

    it('applies selected columns without pre-defined columns', async function () {
      const limit = jest.fn(() => ([]))
      const where = jest.fn(() => ({ limit }))
      const from = jest.fn(() => ({ where }))
      const select = jest.fn(() => ({ from }))
      const knex = { select }
      await findOne(knex, 'test')({}, ['first_name'])

      expect(select).toHaveBeenCalledWith('first_name')

      expect(from).toHaveBeenCalled()
      expect(select).toHaveBeenCalled()
      expect(where).toHaveBeenCalled()
      expect(limit).toHaveBeenCalled()
    })
  })

  it('limit have been called properly', async function () {
    const limit = jest.fn(() => ([]))
    const where = jest.fn(() => ({ limit }))
    const from = jest.fn(() => ({ where }))
    const select = jest.fn(() => ({ from }))
    const knex = { select }
    await findOne(knex, 'test')({})

    expect(limit).toHaveBeenCalledWith(1)

    expect(from).toHaveBeenCalled()
    expect(select).toHaveBeenCalled()
    expect(where).toHaveBeenCalled()
    expect(limit).toHaveBeenCalled()
  })
})
