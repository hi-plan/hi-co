module.exports = function hico(gen) {
  const itr = gen()

  function next(ret) {
    if (ret.done) return ret.value
    const promise = ret.value
    promise.then(r => next(itr.next(r)))
  }

  return next(itr.next())
}
