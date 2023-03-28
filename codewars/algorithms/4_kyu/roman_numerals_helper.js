/*Create a RomanNumerals class that can convert a roman numeral to and from an integer value.
It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

  Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
   In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.
   1666 uses each Roman symbol in descending order: MDCLXVI.

  Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help
Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
M	1000
D	500*/


class RomanNumerals {

  static toRoman(number) {
    let roman_number = '';
    if (number > 3999 || number < 1)
      return 'given number is out of the range'
    else {
      let num;
      if (number / 1000 >= 1) {
        num = Math.floor(number / 1000)
        number = number % 1000

        for (let i = 0; i < num; i++) {
          roman_number += 'M'
        }
      }
      if (Math.floor(number / 100) <= 9 && Math.floor(number / 100) > 0) {
        num = Math.floor(number / 100)
        number = number % 100;

        if (num <= 3)
          for (let i = 0; i < num; i++)
            roman_number += 'C'
        if (num === 4)
          roman_number += 'CD'
        if (num === 5)
          roman_number += 'D'
        if (num > 5 && num < 9) {
          roman_number += 'D'
          for (let i = 0; i < num - 5; i++)
            roman_number += 'C'
        }
        if (num === 9)
          roman_number += 'CM'
      }

      if (Math.floor(number / 10) <= 9 && Math.floor(number / 10) > 0) {
        num = Math.floor(number / 10)
        number = number % 10;
        if (num <= 3)
          for (let i = 0; i < num; i++)
            roman_number += 'X'
        if (num === 4)
          roman_number += 'XL'
        if (num === 5)
          roman_number += 'L'
        if (num > 5 && num < 9) {
          roman_number += 'L'
          for (let i = 0; i < num - 5; i++)
            roman_number += 'X'
        }
        if (num === 9)
          roman_number += 'XC'
      }

      if (number > 0) {
        num = number
        if (num <= 3)
          for (let i = 0; i < num; i++)
            roman_number += 'I'
        if (num === 4)
          roman_number += 'IV'
        if (num === 5)
          roman_number += 'V'
        if (num > 5 && num < 9) {
          roman_number += 'V'
          for (let i = 0; i < num - 5; i++)
            roman_number += 'I'
        }
        if (num === 9)
          roman_number += 'IX'
      }
      return roman_number
    }
  }

  static fromRoman(romanString) {
    let number = 0
    let roman_arr = romanString.split('')
    let last_ind = -1;
    // 1000
    roman_arr.forEach((elem, i) => {
      if (elem === 'M' && (i === 0 || roman_arr[i - 1] === 'M')) {
        number += 1000
        last_ind = i
      }
    })
    roman_arr.splice(0, last_ind + 1)
    last_ind = -1;
    // console.log('roman_arr after splitting thousands: ' + roman_arr)

    // 100
    let num = 0;
    roman_arr.forEach((elem, i) => {
      let flag = true;
      for (let j = 0; j < i; j++) {
        if (roman_arr[j] === 'D')
          flag = false
      }

      if (elem === 'C' && (roman_arr[i + 1] !== 'D') && (roman_arr[i + 1] !== 'M') && (roman_arr[i - 1] !== 'X') && num <= 200 && flag) {
        number += 100
        num += 100
        last_ind = i
      }
      if (elem === 'C' && (roman_arr[i + 1] === 'D')) {
        number += 400
        last_ind = i + 1
      }
      if (elem === 'D' && (roman_arr[i + 1] !== 'C') && (roman_arr[i - 1] !== 'C')) {
        number += 500
        last_ind = i
      }
      if (elem === 'D' && (roman_arr[i + 1] === 'C')) {
        if (roman_arr[i + 3] === 'C' && roman_arr[i + 2] === 'C') {
          number += 800
          last_ind = i + 3
          return
        }
        if (roman_arr[i + 2] === 'C') {
          number += 700
          last_ind = i + 2
        } else {
          number += 600
          last_ind = i + 1
        }
      }
      if (elem === 'C' && (roman_arr[i + 1] === 'M')) {
        number += 900
        last_ind = i + 1
      }
    })
    num = 0;
    roman_arr.splice(0, last_ind + 1)
    last_ind = -1;
    // console.log('roman_arr after splitting hundreds: ' + roman_arr)

    // 10
    roman_arr.forEach((elem, i) => {
      let flag = true;
      for (let j = 0; j < i; j++) {
        if (roman_arr[j] === 'L')
          flag = false
      }

      if (elem === 'X' && (roman_arr[i + 1] !== 'L') && (roman_arr[i + 1] !== 'C') && (roman_arr[i + 1] !== 'M') && (roman_arr[i - 1] !== 'I') && num <= 20 && flag) {
        number += 10
        num += 10
        last_ind = i
      }
      if (elem === 'X' && (roman_arr[i + 1] === 'L')) {
        number += 40
        last_ind = i + 1
      }
      if (elem === 'L' && (roman_arr[i + 1] !== 'X') && (roman_arr[i - 1] !== 'X')) {
        number += 50
        last_ind = i
      }
      if (elem === 'L' && (roman_arr[i + 1] === 'X')) {
        if (roman_arr[i + 3] === 'X' && roman_arr[i + 2] === 'X') {
          number += 80
          last_ind = i + 3
          return
        }
        if (roman_arr[i + 2] === 'X') {
          number += 70
          last_ind = i + 2
        } else {
          number += 60
          last_ind = i + 1
        }

      }
      if (elem === 'X' && (roman_arr[i + 1] === 'C')) {
        number += 90
        last_ind = i + 1
      }
    })
    num = 0;
    roman_arr.splice(0, last_ind + 1)
    // console.log('roman_arr after splitting dozens: ' + roman_arr)

    // 1
    roman_arr.forEach((elem, i) => {
      let flag = true;
      for (let j = 0; j < i; j++) {
        if (roman_arr[j] === 'V')
          flag = false
      }

      if (elem === 'I' && (roman_arr[i + 1] !== 'V') && (roman_arr[i + 1] !== 'X') && (roman_arr[i + 1] !== 'M') && num <= 2 && flag) {
        number += 1
        num += 1
        last_ind = i
        return
      }
      if (elem === 'I' && (roman_arr[i + 1] === 'V')) {
        number += 4
        last_ind = i + 1
      }
      if (elem === 'V' && (roman_arr[i + 1] !== 'I') && (roman_arr[i - 1] !== 'I')) {
        number += 5
        last_ind = i
      }
      if (elem === 'V' && (roman_arr[i + 1] === 'I')) {
        if (roman_arr[i + 3] === 'I' && roman_arr[i + 2] === 'I') {
          number += 8
          last_ind = i + 3
          return
        }
        if (roman_arr[i + 2] === 'I') {
          number += 7
          last_ind = i + 2
        } else {
          number += 6
          last_ind = i + 1
        }

      }
      if (elem === 'I' && (roman_arr[i + 1] === 'X')) {
        number += 9
        last_ind = i + 1
      }
    })
    num = 0;
    roman_arr.splice(0, last_ind + 1)
    // console.log('roman_arr after splitting dozens: ' + roman_arr)
    return number
  }
}