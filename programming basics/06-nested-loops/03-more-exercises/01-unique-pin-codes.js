function uniquePinCodes(input) {
  const isPrime = (num) => {
    if (num <= 1) {
      return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  const n1 = parseInt(input[0])
  const n2 = parseInt(input[1])
  const n3 = parseInt(input[2])

  for (let input1 = 2; input1 <= n1; input1 += 2) {
    for (let input2 = 2; input2 <= n2; input2++) {
      if (isPrime(input2)) {
        for (let input3 = 2; input3 <= n3; input3 += 2) {
          console.log(`${input1} ${input2} ${input3}`)
        }
      }
    }
  }
}

uniquePinCodes([3, 5, 5])
