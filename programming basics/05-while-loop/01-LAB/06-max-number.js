function maxNumber(input) {
  let index = 0
  let entry = input[index++]

  let biggestNum = 0

  while (entry !== "Stop") {
    const currentNum = Number(entry)
    if (currentNum > biggestNum) {
      biggestNum = currentNum
    }
    entry = input[index++]
  }
  return biggestNum
}

console.log(maxNumber(["100", "99", "80", "70", "Stop"]))
