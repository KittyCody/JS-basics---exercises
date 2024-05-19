function averageNumber(input) {
  const n = Number(input[0])
  result = 0

  for (let i = 1; i <= n; i++) {
    const numbers = Number(input[i])
    result += numbers
  }
  console.log((result / n).toFixed(2))
}

averageNumber([3, 82, 43, 22])
