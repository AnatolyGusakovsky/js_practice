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