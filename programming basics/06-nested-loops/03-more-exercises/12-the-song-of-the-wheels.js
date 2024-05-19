function theWheelsSong(input) {
  const controlNum = parseInt(input.shift())

  let buff = ""
  let password = ""
  let combinationsCounter = 0
  let isPasswordFound = false

  for (let a = 1; a <= controlNum; a++) {
    for (let b = 1; b <= controlNum; b++) {
      for (let c = 1; c <= controlNum; c++) {
        for (let d = 1; d <= controlNum; d++) {
          if (a * b + c * d === controlNum) {
            if (
              a < b &&
              c > d &&
              a >= 1 &&
              b >= 1 &&
              c >= 1 &&
              d >= 1 &&
              a <= 9 &&
              b <= 9 &&
              c <= 9 &&
              d <= 9
            ) {
              buff += `${a}${b}${c}${d} `
              combinationsCounter++
              if (combinationsCounter === 4) {
                password = `Password: ${a}${b}${c}${d}`
                isPasswordFound = true
              }
            }
          }
        }
      }
    }
  }

  console.log(buff.trim())

  if (isPasswordFound) {
    console.log(password)
  } else {
    console.log("No!")
  }
}

theWheelsSong([11])
