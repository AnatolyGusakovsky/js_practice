/*
A prime number (or a prime) is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
A natural number greater than 1 that is not prime is called a composite number.
For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself.
However, 6 is composite because it is the product of two numbers (2 × 3) that are both smaller than 6.
*/

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    console.log('Im here ')
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1
}