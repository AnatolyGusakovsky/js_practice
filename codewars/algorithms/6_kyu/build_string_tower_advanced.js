// Build Tower Advanced
// Build Tower by the following given arguments:
//
//   number of floors (integer and always greater than 0)
// block size (width, height) (integer pair and always greater than (0, 0))
// Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:
//
// **
//
// **
// **
// **
//
// for example, a tower of 3 floors with block size = (2, 3) looks like below
//
//   [
//     '    **    ',
//     '    **    ',
//     '    **    ',
//     '  ******  ',
//     '  ******  ',
//     '  ******  ',
//     '**********',
//     '**********',
//     '**********'
//   ]
// and a tower of 6 floors with block size = (2, 1) looks like below
//
//   [
//     '          **          ',
//     '        ******        ',
//     '      **********      ',
//     '    **************    ',
//     '  ******************  ',
//     '**********************'
//   ]
// Don't return a whole string containing line-endings but a list/array/vector of strings instead!
//
// This kata might looks like a 5.5kyu one. So challenge yourself!
//
//   Go take a look at Build Tower which is a more basic version :)

function towerBuilder(nFloors, nBlockSz) {
  let spaces = ' '.repeat(nBlockSz[0]); // works properly
  let string = ''
  const num_dig_first_floor = get_number_of_digits_on_first_floor(nFloors, nBlockSz[0])
  let res_arr = [];
  for (let j = 0; j < num_dig_first_floor; j++) {
    string += '*'
  }
  for (let i = 0; i < nBlockSz[1]; i++)
    res_arr.push(string)

  for (let i = 0; i < nFloors - 1; i++) {
    let string_chars = string.split('')
    string_chars.splice(i * nBlockSz[0], nBlockSz[0], spaces)
    string_chars.reverse()
    string_chars.splice(i * nBlockSz[0], nBlockSz[0], spaces)
    string = string_chars.join('')
    for (let i = 0; i < nBlockSz[1]; i++)
      res_arr.push(string);
  }
  res_arr.reverse()
  return res_arr


  function get_number_of_digits_on_first_floor(floors, block_wide) {
    let digits = block_wide;
    for (let i = 1; i < floors; i++)
      digits += block_wide * 2
    return digits
  }
}

