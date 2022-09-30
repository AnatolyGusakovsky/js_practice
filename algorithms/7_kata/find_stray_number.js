// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//   Complete the method which accepts such an array, and returns that single different number.
//
//   The input array will always be valid! (odd-length >= 3)
//
// Examples
//   [1, 1, 2] ==> 2
//   [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let first = numbers[0];
  let first_incomes = 1;
  let second;
  let second_incomes = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === first)
      first_incomes++
    else {
      second = numbers[i]
      second_incomes++
    }
  }

  if (first_incomes === 1)
    return first
  else
    return second;
}
