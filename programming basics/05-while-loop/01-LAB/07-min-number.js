function minNumber(input) {
  let index = 0
  let entry = input[index++]
  let smallestNum = Number(entry)

  while (entry !== "Stop") {
    const currentNum = Number(entry)
    if (currentNum < smallestNum) {
      smallestNum = currentNum
    }
    entry = input[index++]
  }
  return smallestNum
}

console.log(minNumber(["100", "99", "80", "70", "Stop"]))
