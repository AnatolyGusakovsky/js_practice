function rot13(message) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let encoded_messsage = ''
  const splitted_message = message.split('')

  splitted_message.forEach(char => {
    if (alphabet.includes(char.toLowerCase())) {
      alphabet.forEach((elem, index) => {
        if (elem === char.toLowerCase()) {
          if (isUppercase(char))
            encoded_messsage += alphabet[get_index(index)].toUpperCase()
          else encoded_messsage += alphabet[get_index(index)]
        }
      })
    } else
      encoded_messsage += char
  })

  function get_index(init_index) {
    if (init_index + 13 > alphabet.length - 1)
      return init_index + 13 - alphabet.length
    else return init_index + 13
  }

  function isUppercase(char) {
    return char.toLowerCase() !== char;
  }

  return encoded_messsage
}

console.log(rot13("Ruby is cool!"))