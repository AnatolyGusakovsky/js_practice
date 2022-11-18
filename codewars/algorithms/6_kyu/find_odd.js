/*
Given an array of integers, find the one that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.

  Examples
  [7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/

function findOdd(given_arr) {
  let uniq_members = new Map();
  let result;
  given_arr.forEach((elem) => {
    if (!uniq_members.has(elem))
      uniq_members.set(elem, 1)
    else
      uniq_members.set(elem, uniq_members.get(elem) + 1)
  })

  uniq_members.forEach((value, key) => {
    console.log(key + ' number occurs ' + value + ' times')
    if (value % 2 !== 0)
      result = key
  })

  return result;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))