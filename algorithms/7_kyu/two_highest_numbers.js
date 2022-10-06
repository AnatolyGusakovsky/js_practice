/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array.
The returned value should be an array in the format [second oldest age,  oldest age].
The order of the numbers passed in could be any order. The array will always include at least 2 items.
If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/

function twoOldestAges(ages) {

  let max = ages[0];
  let index_of_max, second_from_max;

  ages.forEach((age, index) => {
    if (max < age) {
      max = age
      index_of_max = index
    }
  })

  ages.splice(index_of_max, 1)
  second_from_max = ages[0];

  ages.forEach((age) => {
    if (second_from_max < age)
      second_from_max = age
  })

  return [max, second_from_max].reverse()
}
