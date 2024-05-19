function sumOfTwoNumbers(input) {
  const startNum = parseInt(input[0])
  const endNum = parseInt(input[1])
  const magicNum = parseInt(input[2])

  let combinationsCount = 0
  let buff = ""
  let isMagicNum = false

  for (let num1 = startNum; num1 <= endNum && isMagicNum === false; num1++) {
    for (let num2 = startNum; num2 <= endNum && isMagicNum === false; num2++) {
      combinationsCount++
      if (num1 + num2 === magicNum) {
        buff += `Combination N:${combinationsCount} (${num1} + ${num2} = ${magicNum})`
        isMagicNum = true
      }
    }
  }
  if (isMagicNum) {
    console.log(buff)
  } else {
    console.log(
      `${combinationsCount} combinations - neither equals ${magicNum}`
    )
  }
}

sumOfTwoNumbers([88, 888, 1000])
