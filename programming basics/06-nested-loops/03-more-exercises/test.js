// function printNumbers(input) {
//   for (let i = input.length - 1; i >= 0; i--) {
//     const currentNum = Number(input[i])

//     console.log(currentNum)
//   }
// }

// printNumbers([36, 456, 267, 32446, 54547, 24235, 467, 2354, 34653])

function primePairs(input) {
  const firstPairTotal = parseInt(input[0])
  const secondPairTotal = parseInt(input[1])
  const differenceFirstPair = parseInt(input[2])
  const differenceSecondPair = parseInt(input[3])

  function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  let pair1 = firstPairTotal
  let pair2 = secondPairTotal

  while (pair1 <= firstPairTotal + differenceFirstPair) {
    if (pair2 > secondPairTotal + differenceSecondPair) {
      pair1++
      pair2 = secondPairTotal
      continue
    }

    if (!isPrime(pair1) || !isPrime(pair2)) {
      pair2++
      continue
    }

    console.log(pair1 + "" + pair2)
    pair2++
  }
}

primePairs([10, 20, 5, 5])
