function carNumber(input) {
  const startNum = parseInt(input[0])
  const endNum = parseInt(input[1])

  let specialNumbers = ""

  for (let num1 = startNum; num1 <= endNum; num1++) {
    for (let num2 = startNum; num2 <= endNum; num2++) {
      for (let num3 = startNum; num3 <= endNum; num3++) {
        for (let num4 = startNum; num4 <= endNum; num4++) {
          if (num1 > num4 && (num2 + num3) % 2 === 0) {
            if (
              (num1 % 2 === 0 && num4 % 2 !== 0) ||
              (num1 % 2 !== 0 && num4 % 2 === 0)
            ) {
              specialNumbers += `${num1}${num2}${num3}${num4} `
            }
          }
        }
      }
    }
  }
  console.log(specialNumbers.trim())
}

carNumber(["2", "3"])
