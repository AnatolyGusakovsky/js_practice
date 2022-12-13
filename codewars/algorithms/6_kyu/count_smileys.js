/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

  Rules for a smiling face:

  Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
  Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

  Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0.
You will not be tested with invalid input (input will always be an array).
Order of the face (eyes, nose, mouth) elements will always be the same.*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let smile_counter = 0;
  ext: for (let i = 0; i < arr.length; i++) {
    let symbols = arr[i].split('')
    if (symbols.length === 2) {
      for (let j = 0; j < symbols.length; j++) {
        let elem = symbols[j]
        if (j === 0)
          if (elem === ":" || elem === ';') {
            continue
          } else continue ext;
        if (j === 1)
          if (elem === ')' || elem === 'D') {
            smile_counter++
          }
      }
    }
    if (symbols.length === 3) {
      for (let k = 0; k < symbols.length; k++) {
        let elem = symbols[k]
        if (k === 0)
          if (elem === ":" || elem === ';') {
            continue
          } else continue ext;
        if (k === 1)
          if (elem === '-' || elem === '~') {
            continue
          } else continue ext
        if (k === 2)
          if (elem === ')' || elem === 'D') {
            smile_counter++
          } else continue ext
      }
    }
  }
  return smile_counter
}

console.log(countSmileys([':)', ';(', ';}', ':-D']))
console.log(countSmileys([';D', ':-(', ':-)', ';~)']))
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))