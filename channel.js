function* channel () {
  var name = yield 'hello, what is your name?'
  return 'well hi there ' + name
}

var gen = channel()
console.log(gen.next().value)
console.log(gen.next('billy').value)
