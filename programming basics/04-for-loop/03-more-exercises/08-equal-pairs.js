function equalPairs(input) {
  const n = parseInt(input[0])
  let pairs = []

  for (let i = 1; i <= 2 * n; i += 2) {
    let pair = parseInt(input[i]) + parseInt(input[i + 1])
    pairs.push(pair)
  }

  const firstValue = pairs[0]
  const allEqual = pairs.every((pair) => pair === firstValue)

  if (allEqual) {
    console.log(`Yes, value=${firstValue}`)
  } else {
    let maxDiff = 0
    for (let i = 0; i < pairs.length - 1; i++) {
      const diff = Math.abs(pairs[i] - pairs[i + 1])
      maxDiff = Math.max(maxDiff, diff)
    }
    console.log(`No, maxdiff=${maxDiff}`)
  }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]) // Output: Yes, value=3
equalPairs(["2", "1", "2", "2", "2"]) // Output: No, maxdiff=1
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]) // Output: No, maxdiff=4
equalPairs(["1", "5", "5"]) // Output: Yes, value=10
equalPairs(["2", "-1", "0", "0", "-1"]) // Output: Yes, value=-1
