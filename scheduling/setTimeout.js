// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
//   Using nested setTimeout.

function printNumbers(from, to) {
  let timer_1_id = setTimeout(function print() {
    console.log(from)
    if (from < to)
      timer_1_id = setTimeout(print, 1000, from++, to)
  }, 1000, from, to)
}

printNumbers(1, 10)