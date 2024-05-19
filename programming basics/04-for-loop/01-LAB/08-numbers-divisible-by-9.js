function numbersDivisibleByNine(input) {
  const start = Number(input[0])
  const end = Number(input[1])
  let sum = 0
  let buffer = ""
  for (let i = start; i <= end; i++) {
    if (i % 9 === 0) {
      sum += i
      buffer += i + "\n"
    }
  }
  console.log(`The sum: ${sum}`)
  console.log(buffer)
}

numbersDivisibleByNine(["100", "200"])
