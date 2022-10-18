/*Digital root is the recursive sum of all the digits in a number.

  Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

  Examples
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2*/


// NOTE! for real-life needs there is much simpler/faster/better solution for this task. I've done this as I can, without googling, so solution is not ideal)


function digitalRoot(n) {
  console.log('n: ' + n)
  let result = n;
  while (get_number_of_digits(result) > 1) {
    result = get_sum_of_digits(number_to_array_of_digits(result))
  }
  return result;
}

function get_number_of_digits(number) {
  let number_of_digits = 0
  while (number >= 1) {
    number = Math.trunc(number / 10)
    number_of_digits++
  }
  return number_of_digits;
}

function number_to_array_of_digits(n) {
  let numbers = []
  while (n >= 1) {
    numbers.push(n % 10)
    n = Math.trunc(n / 10)
  }
  return numbers.reverse()
}

function get_sum_of_digits(array) {
  let res = 0;
  array.forEach((digit) => {
    res += digit;
  })
  return res;
}