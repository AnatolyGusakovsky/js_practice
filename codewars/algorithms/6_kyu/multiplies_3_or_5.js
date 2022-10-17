function solution(number) {
  if (number < 0)
    return 0

  let numbers = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      numbers.push(i)
  }
  let result = 0;
  numbers.forEach((num) => {
    result += num
  })
  return result;
}

console.log(solution(10))