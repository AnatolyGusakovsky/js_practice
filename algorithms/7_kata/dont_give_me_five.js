// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
//
//   Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

function dontGiveMeFive(start, end) {
  let res_arr = [];
  loop1: for (let i = start; i <= end; i++) {
    let number_of_digits = get_number_of_digits(i)
    let temp_num = i;
    while (number_of_digits > 0) {
      // console.log('temp_num: ' + temp_num)
      if (Math.abs(temp_num % 10) === 5 || Math.abs(temp_num) === 5)
        continue loop1;
      temp_num = Math.trunc(temp_num / 10)
      number_of_digits--;
    }
    res_arr.push(i)
  }
  return res_arr.length;
}

function get_number_of_digits(number) {
  number = Math.abs(number)
  let number_of_digits = 0
  do {
    number = number / 10
    if (number === 1)
      number_of_digits++
    number_of_digits++
  }
  while (number > 1)

  return number_of_digits;
}

dontGiveMeFive(-15, 10)