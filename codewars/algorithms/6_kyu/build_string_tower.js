/*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

  For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]*/

function towerBuilder(nFloors) {
  let string = ''
  const num_dig_first_floor = get_number_of_digits_on_first_floor(nFloors)
  let res_arr = [];
  for (let j = 0; j < num_dig_first_floor; j++) {
    string += '*'
  }
  res_arr.push(string)

  for (let i = 0; i < nFloors-1; i++) {
    let string_chars = string.split('')
    string_chars.splice(i, 1, ' ')
    string_chars.splice(string_chars.length - 1 - i, 1, ' ')


    string = string_chars.join('')
    res_arr.push(string);
  }
  res_arr.reverse()
  console.log(res_arr)
  return res_arr

  function get_number_of_digits_on_first_floor(floors) {
    let digits = 1;
    for (let i = 1; i < floors; i++)
      digits += 2
    return digits
  }
}