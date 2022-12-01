/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

  Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word) {
  let given_chars = word.toLowerCase().split('')
  let char_set = new Set(given_chars)
  let entry_map = new Map();

  char_set.forEach((elem) => {
    let counter = 0
    given_chars.forEach((c) => {
      if (elem === c)
        counter++
    })
    entry_map.set(elem, counter)
  })

  let result_string = '';
  given_chars.forEach((value) => {
    if (entry_map.get(value) >= 2)
      result_string += ')'
    else
      result_string += '('
  })
  return result_string;
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('(( @'))


