/*Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

  Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"*/

function spinWords(string) {
  let words_arr = string.split(' ')
  let res_arr = words_arr.map((elem) => {
    if (elem.length >= 5) {
      temp_arr = elem.split('')
      temp_arr.reverse()
      return temp_arr.join('')
    }
    return elem;
  })
  return res_arr.join(' ')
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))