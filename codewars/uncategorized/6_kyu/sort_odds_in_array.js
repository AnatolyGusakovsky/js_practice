// Sort the odd numbers in ascending order while leaving the even numbers at their original positions.
/*
[7, 1] => [1, 7]
[5, 8, 6, 3, 4] => [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0] => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sort_odds_in_array(arr) {
  const odds = arr
    .filter(x => x%2)
    .sort((a, b) => a - b);

  return arr
    .map(x => x%2 ? odds.shift() : x);
}

console.log(sort_odds_in_array([7, 1]));
console.log(sort_odds_in_array([5, 8, 6, 3, 4]));
console.log(sort_odds_in_array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));