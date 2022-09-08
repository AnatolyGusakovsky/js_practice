// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
//
//   For instance:
//
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo(num){
  if(num === 1)
    return 1
  return num +sumTo(num-1)
}

console.log(sumTo(100))