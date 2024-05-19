function numberPyramid(input) {
  const n = Number(input[0])

  let currentPrintNum = 1
  let isFinish = false

  for (let row = 1; row <= n; row++) {
    let buff = ""
    for (let col = 0; col < row; col++) {
      buff += currentPrintNum + " "

      if (currentPrintNum === n) {
        isFinish = true
        break
      }
      currentPrintNum++
    }
    console.log(buff)
    console.log(buff)

    if (isFinish) {
      break
    }
  }
}

numberPyramid([15])

// let n = Number(input[0])
// let currentPrintNum = 1

// let isFinish = false

// for (let row = 1; row <= n; row++) {
//   let buff = ""

//   for (let col = 0; col < row; col++) {
//     buff += currentPrintNum + " "

//     if (currentPrintNum === n) {
//       isFinish = true
//       break
//     }
//     currentPrintNum++
//   }
//   console.log(buff)
//   if (isFinish) {
//     break
//   }
// }
