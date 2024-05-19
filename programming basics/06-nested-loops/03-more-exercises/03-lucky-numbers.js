function luckyNumbers(input) {
  const n = Number(input[0])

  let luckyNumbers = ""

  for (let num1 = 1; num1 <= 9; num1++) {
    for (let num2 = 1; num2 <= 9; num2++) {
      for (let num3 = 1; num3 <= 9; num3++) {
        for (let num4 = 1; num4 <= 9; num4++) {
          if (num1 + num2 === num3 + num4 && n % (num1 + num2) === 0) {
            luckyNumbers += `${num1}${num2}${num3}${num4} ` + ""
          }
        }
      }
    }
  }
  console.log(luckyNumbers)
}

luckyNumbers(["24"])
