function multiplyPositiveNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    const num = Number(input[i])
    if (num < 0) {
      console.log("Negative number!")
      break
    } else {
      const result = (num * 2).toFixed(2)
      console.log(`Result: ${result}`)
    }
  }
}

multiplyPositiveNumbers(["12", "43.2144", "12.3", "543.23", "-20"])
