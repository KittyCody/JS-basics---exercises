function calculateChange(input) {
  const coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
  let change = parseFloat(input[0])
  let coinsCounter = 0

  for (let i = 0; i < coins.length; i++) {
    while (change >= coins[i]) {
      change = Number((change - coins[i]).toFixed(2))
      coinsCounter++
    }
  }
  console.log(coinsCounter)
}

calculateChange(["1.23"])

// 4
// console.log(calculateChange(2)) // 1
// console.log(calculateChange(0.56)) // 3
// console.log(calculateChange(2.73)) // 5
