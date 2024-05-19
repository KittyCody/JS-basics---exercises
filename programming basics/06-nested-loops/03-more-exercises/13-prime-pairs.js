function primePairs(input) {
  const firstPairTotal = parseInt(input[0])
  const secondPairTotal = parseInt(input[1])
  const differenceFirstPair = parseInt(input[2])
  const differenceSecondPair = parseInt(input[3])

  const isPrime = (num) => {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  for (
    let pair1 = firstPairTotal;
    pair1 <= firstPairTotal + differenceFirstPair;
    pair1++
  ) {
    for (
      let pair2 = secondPairTotal;
      pair2 <= secondPairTotal + differenceSecondPair;
      pair2++
    ) {
      if (isPrime(pair1) && isPrime(pair2)) {
        console.log(`${pair1}${pair2}`)
      }
    }
  }
}

primePairs([10, 20, 5, 5])
