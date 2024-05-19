function passwordGenerator(input) {
  const n = parseInt(input[0])
  const l = parseInt(input[1])

  let buff = ""

  for (let symbol1 = 1; symbol1 <= n; symbol1++) {
    for (let symbol2 = 1; symbol2 <= n; symbol2++) {
      for (let symbol3 = 97; symbol3 < 97 + l; symbol3++) {
        for (let symbol4 = 97; symbol4 < 97 + l; symbol4++) {
          if (
            symbol1 === n &&
            symbol2 === n &&
            symbol3 === 97 &&
            symbol4 === 97
          ) {
            break
          }
          for (let symbol5 = symbol1 + 1; symbol5 <= n; symbol5++) {
            buff += `${symbol1}${symbol2}${String.fromCharCode(
              symbol3
            )}${String.fromCharCode(symbol4)}${symbol5} `
          }
        }
        if (symbol1 === n && symbol2 === n && symbol3 === 97) {
          break
        }
      }
    }
  }
  console.log(buff.trim())
}

passwordGenerator([4, 2])
