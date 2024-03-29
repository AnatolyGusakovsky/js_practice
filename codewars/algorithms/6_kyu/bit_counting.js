/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/

let countBits = function (n) {
  function dec_to_bin(dec_n) {
    return n.toString(2);
  }

  let bits_arr = dec_to_bin(n).split('')
  let counter = 0;
  bits_arr.forEach((bit) => {
    if (bit == 1)
      counter++
  })
  return counter
};


console.log(countBits(10))