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

//todo: 1. create algorithm first
function permutations(string) {
  let result_arr, string_digits_arr;
  string_digits_arr = string.split('');
  let count_of_combinations = get_factorial(string.split('').length)
  for(let i = 0; i < string_digits_arr.length; i++){
    for(let j = 0; j < string_digits_arr.length-1; j++){

//thinking on algorithm on paper
    }
  }



  return [];
}

function get_factorial(n){
  if(n===1)
    return 1
  return n*get_factorial(n-1)
}

