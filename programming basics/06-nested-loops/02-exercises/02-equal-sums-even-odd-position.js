function equalSumEvenOddPositions(input) {
  const firstNum = parseInt(input.shift())
  const secondNum = parseInt(input.shift())

  let result = ""

  for (let i = firstNum; i <= secondNum; i++) {
    let numAsString = i.toString()
    let oddSum = 0
    let evenSum = 0

    for (let j = 0; j < numAsString.length; j++) {
      if (j % 2 === 0) {
        evenSum += parseInt(numAsString[j])
      } else {
        oddSum += parseInt(numAsString[j])
      }
    }

    if (evenSum === oddSum) {
      result += i + " "
    }
  }
  console.log(result)
}

equalSumEvenOddPositions(["123456", "124000"])
