/*
In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

  Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
  * With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.*/

function permutations(string) {
  let blocks = [];
  let chars = string.split('');

  for (let i = 0; i < string.length; i++) {

    let first_char = chars.shift()
    chars.push(first_char)
    blocks.push(chars.join(''))
  }
  let last = blocks.pop()
  blocks.unshift(last)
  // blocks founded
  blocks.forEach((block) => {

  })


  return [];
}

function get_factorial(n) {
  if (n === 1)
    return 1
  return n * get_factorial(n - 1)
}

permutations('abcdefgh')

// Thinking on algorithm:
// 1. Count of symbols in given string = number of calculation blocks
// 2. Create array with blocks by rearranging each symbol in string on first place (doesn't matter, switch places with current first symbol or just move on first place)
// 3. Start permute last 2 symbols, then remember this 2 combinations and for each permute with 3th symbol from the end and do it till the first symbol recursively

