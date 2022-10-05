// https://www.codewars.com/kata/544aed4c4a30184e960010f4
// Create a function named divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest. If the number is prime return the string '(integer) is prime'

function divisors(integer) {
  let divisors = []
  let limit = Math.floor(Math.sqrt(integer))
  for(let i = limit; i > 1; i--){
    if(integer % i === 0) {
      divisors.push(i)
      if(i !== integer/i)
        divisors.push(integer/i)
    }

  }
  if(divisors.length===0)
    return `${integer} is prime`
  else
    return divisors.sort(function(a, b){return a-b})
};