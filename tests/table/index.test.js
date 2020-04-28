const Jao = require('../../src/jao')

describe('table', function () {
  it('returns an empty object w/o params', () => {
    const jao = new Jao()
    const tableMapping = jao.table()
    expect(tableMapping).toMatchObject({})
  })

  it('returns pre-defined table', () => {
    const jao = new Jao()
    jao.table('users', {})
    const tableMapping = jao.table('users', {})
    expect(tableMapping).toBeTruthy()
  })
})
