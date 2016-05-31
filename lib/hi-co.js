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
 * Basic Version.
 */

// module.exports = function hico(gen) {
//   const itr = gen()
//
//   function next(ret) {
//     if (ret.done) return ret.value
//     const promise = ret.value
//     promise.then(r => next(itr.next(r)))
//   }
//
//   return next(itr.next())
// }


/**
 * Formal Version.
 */
