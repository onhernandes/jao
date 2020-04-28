const Jao = require('../src/jao')
const instance = new Jao({
  password: '123456'
})

const f = async () => {
  const results = await instance.table('test').insert({ first_name: 'me' })
  console.log(results)
}

f()
