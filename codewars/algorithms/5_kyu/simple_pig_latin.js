/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.

  Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/

function pigIt(str) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let words = str.split(' ');
  let res_arr = [];
  words.forEach((elem) => {
    if (!alphabet.includes(elem.split('')[0].toLowerCase())) {
      res_arr.push(elem)
    } else {
      let word_chars = elem.split('')
      let first = word_chars.shift()
      word_chars.push(first)
      res_arr.push(word_chars.join('') + 'ay')
    }
  })
  return res_arr.join(' ')
}


console.log(pigIt('Hello world !'))