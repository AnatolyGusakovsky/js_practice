/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

  Examples
  [2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)*/

function findOutlier(integers) {
  if (integers.length < 3)
    return 0;

  let even_counter = 0;
  let odd_counter = 0;

  integers.forEach((elem) => {
    if (elem % 2 === 0)
      even_counter++
    else
      odd_counter++
  })
  let target;
  if (even_counter > odd_counter) {
    integers.forEach(elem => {
      if (elem % 2 !== 0)
        target = elem
    })
  } else {
    integers.forEach(elem => {
      if (elem % 2 === 0)
        target = elem
    })
  }
  return target
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))