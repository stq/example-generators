function* channel () {
  try {
    var name = yield 'hello, what is your name?'
  }
  catch (er) {
    console.log('caught', er)
  }
  return 'well hi there ' + name
}

var gen = channel()
console.log(gen.next())
console.log(gen.throw('billy').value)
