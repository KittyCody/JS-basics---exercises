function secretDoorLock(input) {
  const maxHundreds = parseInt(input[0])
  const maxDozens = parseInt(input[1])
  const maxUnits = parseInt(input[2])

  let buff = ""

  for (let num1 = 1; num1 <= maxHundreds; num1++) {
    for (let num2 = 1; num2 <= maxDozens; num2++) {
      for (let num3 = 1; num3 <= maxUnits; num3++) {
        if (num2 === 2 || num2 === 3 || num2 === 5 || num2 === 7) {
          if (num1 % 2 === 0 && num3 % 2 === 0) {
            buff += `${num1} ${num2} ${num3}\n`
          }
        }
      }
    }
  }
  console.log(buff)
}

secretDoorLock([8, 2, 8])
