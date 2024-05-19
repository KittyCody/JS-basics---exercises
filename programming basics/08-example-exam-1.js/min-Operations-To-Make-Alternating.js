function minOperationsToMakeAlternating(input) {
  let symbol1 = ""
  let symbol2 = ""

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      symbol1 += "0"
      symbol2 += "1"
    } else {
      symbol1 += "1"
      symbol2 += "0"
    }
  }

  let diff1 = 0
  let diff2 = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== symbol1[i]) {
      diff1++
    }
    if (input[i] !== symbol2[i]) {
      diff2++
    }
  }

  return Math.min(diff1, diff2)
}

console.log(minOperationsToMakeAlternating("1111"))
