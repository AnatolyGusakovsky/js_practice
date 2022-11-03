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

// todo: figure out how it works step by step
function permutations(string) {
  let array = string.split('')
  function p(array, temp) {
    let i, x;
    if (!array.length && !result.includes(temp.join(''))) {
      result.push(temp.join(''));
    }
    for (i = 0; i < array.length; i++) {
      x = array.splice(i, 1)[0];
      p(array, temp.concat(x));
      array.splice(i, 0, x);
    }
  }

  let result = [];
  p(array, []);
  return result;
}

console.log(permutations('abc'))

// Thinking on algorithm:
// 1. Count of symbols in given string = number of calculation blocks
// 2. Create array with blocks by rearranging each symbol in string on first place (doesn't matter, switch places with current first symbol or just move on first place)
// 3. Then for each block cut first symbol and rearrange each remaining symbols on 'new' first place
// 4. Repeat this until last 2 symbols
// 5. Go back and concat all symbols for all blocks

// Description of algorithm probably is not clear, but schema of it's algorithm looks like a tree. You can google it

