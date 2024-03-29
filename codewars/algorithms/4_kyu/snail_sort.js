/*Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

  array = [[1,2,3],
          [4,5,6],
          [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

  array = [[1,2,3],
    [8,9,4],
    [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].*/


snail = function (array) {

  if (array.length === 1 && array[0].length === 0)
    return []

  if (array.length === 1 && array[0].length === 1)
    return array[0]

  let result_arr = [];

  while (array.length > 0) {
    result_arr.push(...array[0])
    array.shift()

    for (let i = 0; i < array.length - 1; i++) {
      result_arr.push(array[i][array[i].length - 1])
      array[i].pop()
    }

    result_arr.push(...array[array.length - 1].reverse())
    array.pop()

    for (let i = array.length - 1; i >= 0; i--) {
      result_arr.push(array[i][0])
      array[i].shift()
    }

    if (array.length === 1) {
      result_arr.push(...array[0])
      array = [];
    }
  }
  return result_arr
}

// just for debug:
function what_inside_array(array) {
  console.log('Inside array now are: ')
  array.forEach((elem) => {
    console.log(elem)
  })
  console.log('------------')
}

