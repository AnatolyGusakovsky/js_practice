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
    /* symbols.forEach((elem, index) => */
    for (let j = 0; j < symbols.length; j++) {
      let elem = symbols[j]
      if (i === 0) {
        if (elem !== ":" || elem !== ';')
          continue ext;
      }
      if (i === 1) {
        if (elem !== '-' || elem !== '~' || elem !== ')' || elem !== 'D')
          continue ext;
        if(elem === ')' || elem === 'D' && i < symbols.length-1)
          continue ext;
      }
      smile_counter++
    }
  }
  return smile_counter
}

console.log(countSmileys([':)', ';(', ';}', ':-D']))