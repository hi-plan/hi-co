const Promise = require('hi-promise')
const hico = require('../')

// Mock fetch API fot testing
const fetch = function(uri) {
  return new Promise(function(resolve, reject) {
    resolve('{"success": true}')
  })
}


describe('Promise fetch test', function() {
  it('should get correct result', (done) => {
    hico(function *() {
      const resp = yield fetch()
      console.log(resp)
      const ret = yield fetch()
      console.log(ret)
      done()
    })
  })
  
  it('should return a new promise', (done) => {
    hico(function() {
      return 123
    }).then(function(r) {
      if (r) done()
    })
    
  })
})