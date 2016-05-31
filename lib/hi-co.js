/**
 * @Author Eric Wong
 * ele828@gmail.com
 *
 ***********************************************************
 *                       Hi-CO                             *
 *              It's an experiment library,                *
 *      had better not to use in production environment.   *
 ***********************************************************
 */

/**
 * Formal Version.
 * Inspired by `co`
 */

const Promise = require('hi-promise')

const hico = function hico(gen) {
  return new Promise(function(resolve, reject) {
    if (gen && typeof gen === 'function')
      gen = gen()
    if (!gen || typeof gen.next !== 'function')
      return resolve(gen)
    
    function onFulfilled() {
      
    }
    
    function onRejected() {
      
    }

    function next() {
      
    }
    
  })
}

// If thenable, it's a promise
function isPromise(fn) {
  return typeof fn.then === 'function'
}

module.exports = hico

