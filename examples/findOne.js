const Jao = require('../src/jao')
const instance = new Jao({
  password: '123456'
})

const f = async () => {
  const results = await instance.table('test').findOne()
  console.log(results)
}

f()
