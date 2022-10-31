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

// algorithm has been created.
//todo: 1. decompose on steps, 2. implement
function permutations(string) {
  let result_arr, string_digits_arr;
  string_digits_arr = string.split('');
  let count_of_combinations = get_factorial(string.split('').length)
  for(let i = 0; i < string_digits_arr.length; i++){
    for(let j = 0; j < string_digits_arr.length-1; j++){
      // let combination =
let temp = string_digits_arr[j]

    }
  }



  return [];
}

function get_factorial(n){
  if(n===1)
    return 1
  return n*get_factorial(n-1)
}

// Thinking on algorithm:
// 1. Count of symbols in given string = number of calculation blocks
// 2. Create array with blocks by rearranging each symbol in string on first place (doesn't matter, switch places with current first symbol or just move on first place)
// 3. Start permute last 2 symbols, then remember this 2 combinations and for each permute with 3th symbol from the end and do it till the first symbol recursively

