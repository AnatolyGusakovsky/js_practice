/*
  #Example 1: 
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

  #Example 2: 
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

  Thinking
1. Creating array to store matches
2. Loop over both array and push inside the match array those who array2 include the value of the array1 element
3. Using indexOf to filter each element to make sure they are unique.
*/

function check_entry(array1, array2) {
  const matches_arr = []

  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      const arr1_el = array1[j];
      const arr2_el = array2[i];
      if (arr2_el.includes(arr1_el)) {
        matches_arr.push(arr1_el)
      }
    }
  }

  return matches_arr.filter((el, i, a) => a.indexOf(el) === i).sort((a, b) => {
    const low_a = a.toLowerCase();
    const low_b = b.toLowerCase();

    if (low_a < low_b) {
      return -1;
    }

    return 1;
  })
}


console.log('Example 1')
console.log(check_entry(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))

console.log('Example 2')
console.log(check_entry(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))