function letters(input) {
  const allLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]

  const secretLetters = ["c", "o", "n"]
  const secretEncounters = [false, false, false]

  let result = ""
  let currentWord = ""

  for (let i = 0; i < input.length; i++) {
    const element = input[i]
    if (element === "End") {
      break
    }

    const secretIndex = secretLetters.indexOf(element)
    if (secretIndex === -1) {
      if (allLetters.includes(element)) {
        currentWord += element
      }

      continue
    }

    if (secretEncounters[secretIndex]) {
      currentWord += element
      continue
    }

    secretEncounters[secretIndex] = true
    if (secretEncounters[0] && secretEncounters[1] && secretEncounters[2]) {
      result += currentWord + " "
      currentWord = ""
      secretEncounters[0] = false
      secretEncounters[1] = false
      secretEncounters[2] = false
    }
  }

  console.log(result)
}

letters([
  "H",
  "n",
  "e",
  "l",
  "l",
  "o",
  "o",
  "c",
  "t",
  "c",
  "h",
  "o",
  "e",
  "r",
  "e",
  "n",
  "e",
  "End",
])
letters([
  "%",
  "!",
  "c",
  "^",
  "B",
  "`",
  "o",
  "%",
  "o",
  "o",
  "M",
  ")",
  "{",
  "n",
  "\\",
  "A",
])
letters([
  "o",
  "S",
  "%",
  "o",
  "l",
  "^",
  "v",
  "e",
  "c",
  "n",
  "&",
  "m",
  "e",
  "c",
  "o",
  "n",
  "End",
])
