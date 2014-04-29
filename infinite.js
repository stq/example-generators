function* fibGen() {
  var current = 0, next = 1, swap
  while (true) {
    swap = current, current = next
    next = swap + next
    yield current
  }
}

for (var n of fibGen()) {
  if (n > 5000) break
}

console.log(n)
