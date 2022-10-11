function towerBuilder(nFloors) {
// todo
}

function get_number_of_digits_on_first_floor(floors) {
  let digits = 1;
  for (let i = 1; i < floors; i++)
    digits += 2
  return digits
}