function* generatorFn () {
  console.log('look ma I was suspended')
}
var generator = generatorFn()
setTimeout(function () {
  generator.next()
}, 2000)
