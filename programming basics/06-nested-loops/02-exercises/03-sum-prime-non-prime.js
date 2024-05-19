function isPrime(input) {
  let index = 0
  let command = input[index]
  index++

  let sumPrimeNum = 0
  let sumNonPrimeNum = 0

  while (command !== "stop") {
    let num = Number(command)

    if (num < 0) {
      console.log("Number is negative.")
    } else if (num === 1) {
      sumNonPrimeNum += num
    } else {
      let isPrime = true
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false
          break
        }
      }
      if (isPrime) {
        sumPrimeNum += num
      } else {
        sumNonPrimeNum += num
      }
    }

    command = input[index]
    index++
  }
  console.log("Sum of all prime numbers is:", sumPrimeNum)
  console.log("Sum of all non prime numbers is:", sumNonPrimeNum)
}

isPrime([3, 9, 0, 7, 19, 4])
