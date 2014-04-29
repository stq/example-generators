var fs = require('fs')

function thunkify (nodefn) {
  return function () {
    var args = Array.prototype.slice.call(arguments)
    return function (cb) {
      args.push(cb)
      nodefn.apply(this, args)
    }
  }
}

function run (genFn) {
  var gen = genFn()

  next()
  function next (er, value) {
    if (er) return gen.throw(er) // throw error back to genFn if error

    var continuable = gen.next(value) // send async return value back to genFn, get gen state
    if (continuable.done) return // genFn has returned and we are done

    var cbFn = continuable.value
    cbFn(next)
  }
}

var readFile = thunkify(fs.readFile)

run(function* () {
  console.log("Starting")
  var file = yield readFile('./generator.js')
  console.log(file.toString())
})
