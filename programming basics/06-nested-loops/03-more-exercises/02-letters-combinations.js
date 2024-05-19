function lettersCombinations(input) {
  const startLetter = input[0].charCodeAt(0)
  const endLetter = input[1].charCodeAt(0)
  const missThisLetter = input[2].charCodeAt(0)

  let buff = ""
  let combinationsNum = 0

  for (let letter1 = startLetter; letter1 <= endLetter; letter1++) {
    for (let letter2 = startLetter; letter2 <= endLetter; letter2++) {
      for (let letter3 = startLetter; letter3 <= endLetter; letter3++) {
        if (
          letter1 !== missThisLetter &&
          letter2 !== missThisLetter &&
          letter3 !== missThisLetter
        ) {
          buff +=
            String.fromCharCode(letter1) +
            String.fromCharCode(letter2) +
            String.fromCharCode(letter3) +
            " "
          combinationsNum++
        }
      }
    }
  }
  console.log(buff + combinationsNum)
}

lettersCombinations(["a", "c", "b"])
