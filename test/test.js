const fetch = require('node-fetch')
const co = require('co')

const hico = require('../lib')

const uri = 'https://www.dobest.me/api/read?id=1'

// Promise based
/*
fetch(uri).then(resp => resp.json())
  .then((resp) => {
    console.log(resp)
  })
*/

// Co and Promise based
/*
co(function *() {
  const resp = yield fetch(uri)
  const ret = yield resp.json()
  const count = ret.ReadCount
  console.log(count)
})
*/

// Hi-co based
hico(function *() {
  const resp = yield fetch(uri)
  const ret = yield resp.json()
  const count = ret.ReadCount
  console.log(count)
})
