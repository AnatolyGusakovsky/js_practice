/*Digital root is the recursive sum of all the digits in a number.

  Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

  Examples
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2*/

// todo: in progress
function get_number_of_digits(number) {
  // number = Math.abs(number)
  let number_of_digits = 0
  let numbers = []
  do {
    numbers.push(number%10)
    number = number / 10
    if (number === 1)
      number_of_digits++
    number_of_digits++
  }
  while (number > 1)
console.log('numbers: ' + numbers)
  return number_of_digits;
}

console.log(get_number_of_digits(999))