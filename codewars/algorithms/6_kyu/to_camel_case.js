/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

  Examples
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"the-stealth-warrior" gets converted to "theStealthWarrior"*/


function toCamelCase(str) {
  let str_arr = str.split('')
  let result_str = ''
  let upeerCaseFlag = false;
  str_arr.forEach((elem, index) => {
    if (elem === '_' || elem === '-') {
      upeerCaseFlag = true
    } else {
      if (upeerCaseFlag) {
        result_str += elem.toUpperCase()
        upeerCaseFlag = false
      } else result_str += elem
    }
  })
  return result_str
}

console.log(toCamelCase("the_stealth_warrior"))