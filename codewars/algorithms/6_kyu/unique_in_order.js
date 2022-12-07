/*Implement the function unique_in_order which takes as argument a sequence and
returns a list of items without any elements with the same value next to each other
and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/

let uniqueInOrder = function (iterable) {
  let iterable_chars;
  if (!Array.isArray(iterable))
    iterable_chars = iterable.split('');
  else
    iterable_chars = iterable;
  let res_arr = []
  iterable_chars.forEach((elem, index) => {
      if (index === 0)
        res_arr.push(elem)

      else if (elem === res_arr[res_arr.length - 1]) {
      } else res_arr.push(elem)
    }
  )
  return res_arr
}

console.log(uniqueInOrder('ABBCcAD'))