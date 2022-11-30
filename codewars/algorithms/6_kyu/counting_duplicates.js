/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters
and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

function duplicateCount(text) {
  let given_chars = text.toLowerCase().split('')
  let char_set = new Set(given_chars)

  if (char_set.size === given_chars.length)
    return 0

  let entry_map = new Map();
  char_set.forEach((elem) => {
    let counter = 0
    given_chars.forEach((c) => {
      if (elem === c)
        counter++
    })
    entry_map.set(elem, counter)
  })

  let result_counter = 0;
  entry_map.forEach((value) => {
    if (value >= 2)
      result_counter++
  })
  return result_counter
}

console.log(duplicateCount("Indivisibilities"))