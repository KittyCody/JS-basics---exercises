function specialNumbers(input) {
  const n = Number(input[0])

  let buff = ""

  for (let i = 1111; i <= 9999; i++) {
    let numAsString = String(i)
    let a = Number(numAsString[0])
    let b = Number(numAsString[1])
    let c = Number(numAsString[2])
    let d = Number(numAsString[3])

    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
      buff += numAsString + " "
    }
  }

  console.log(buff)
}

specialNumbers([16])

//   for (let a = 1; a <= 9; a++) {
//     for (let b = 1; b <= 9; b++) {
//       for (let c = 1; c <= 9; c++) {
//         for (let d = 1; d <= 9; d++) {
//           if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
//             buff += " " + a + b + c + d + ""
//           }
//         }
//       }
//     }
//   }
