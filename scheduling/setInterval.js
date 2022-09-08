// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
//   Using setInterval.

function printNumbers(from, to) {
  let current = from
  let interval_id = setInterval(function x() {
    if (current <= to)
      console.log(current)
    if (current === to)
      clearInterval(interval_id)
    current++
  }, 1000)
}

printNumbers(1, 3)
