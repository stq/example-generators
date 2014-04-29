function* fibGen (n) {
  var current = 0, next = 1, swap
  yield current

  for (var i = 0; i < n; i++) {
    swap = current, current = next
    next = swap + next
    yield current
  }
}

var fibIter = fibGen(20)

var next = fibIter.next()
console.log(next.value)

setTimeout(function () {
  var next = fibIter.next()
  console.log(next.value)
}, 2000)
