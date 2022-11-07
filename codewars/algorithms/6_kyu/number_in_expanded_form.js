/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  let numString = num.toString()
  let numArr = numString.split('')

  let arr = []
  for (let i = 0; i < numString.length; i++) {
    if (numArr[i] !== '0')
      arr.push(numArr[i] * Math.pow(10, numString.length - 1 - i))
  }
  let result = ''
  arr.forEach((elem, index) => {
    if (index === arr.length - 1)
      result += elem
    else
      result += elem + ' + '
  })
  return result
}

console.log(expandedForm(9123))