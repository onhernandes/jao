const Jao = require('../src/jao')

describe('jao', () => {
  it('checks jao instance', () => {
    const instance = new Jao()
    expect(instance).toHaveProperty('table')
  })
})
