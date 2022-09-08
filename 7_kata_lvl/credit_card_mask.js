const assert = require('chai').assert;
/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

  Your task is to write a function maskify, which changes all but the last four characters into '#'.

  Examples
"4556364607935616" --> "############5616"
"64607935616" -->      "#######5616"
"1" -->                "1"
"" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"*/

// return masked string
function maskify(cc) {
  let result_string;
  if (cc.length > 4) {
    let last_four_numbers = cc.slice(cc.length-4)
    let count_resh = cc.slice(0, cc.length-4).length
    result_string = new Array(count_resh+1).join('#')+last_four_numbers
    return result_string
  }
  else
    return cc
}
console.log(Math.min([1,2,3].values()))


// describe("maskify", function(){
//   it("should work for some examples", function(){
//     assert.deepEqual(maskify('4556364607935616'), '############5616');
//     assert.deepEqual(maskify('1'), '1');
//     assert.deepEqual(maskify('11111'), '#1111');
//   });
// });
