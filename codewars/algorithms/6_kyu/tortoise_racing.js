/*
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

  When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

  The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

  If v1 >= v2 then return null or -1

  Examples:

race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37)   => [3, 21, 49]
*/

function race(v1, v2, g) {
  if (v1 < 0 || v2 < 0 || g < 0 || v2 < v1)
    return null
  let res_arr = []
  let total_time_in_hours = g / (v2 - v1)
  let total_in_seconds = Math.floor(3600 * total_time_in_hours)

  let hours = Math.floor(total_time_in_hours)
  let minutes = Math.floor((total_in_seconds - 3600 * hours) / 60)
  let seconds = Math.floor((total_in_seconds - 3600 * hours - 60 * minutes))

  res_arr.push(hours, minutes, seconds)
  return res_arr
}

console.log(race(80, 91, 37))