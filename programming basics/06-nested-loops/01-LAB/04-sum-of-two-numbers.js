function sumOfTwoNumbers(input) {
  const startNum = parseInt(input.shift())
  const endNum = parseInt(input.shift())
  const magicNum = parseInt(input.shift())

  let combinationCounter = 0
  let isValidCombinationFound = false

  for (let firstNum = startNum; firstNum <= endNum; firstNum++) {
    for (let secondNum = startNum; secondNum <= endNum; secondNum++) {
      combinationCounter++

      if (firstNum + secondNum === magicNum) {
        isValidCombinationFound = true
        console.log(
          `Combination N:${combinationCounter} (${firstNum} + ${secondNum} = ${magicNum})`
        )
        break
      }
    }
    if (isValidCombinationFound === true) {
      break
    }
  }
  if (isValidCombinationFound === false) {
    console.log(
      `${combinationCounter} combinations - neither equals ${magicNum}`
    )
  }
}

sumOfTwoNumbers(["23", "24", "20"])
