function combinations(input) {
  const n = parseInt(input.shift())
  let validCombinationsCount = 0

  for (let x1 = 0; x1 <= n; x1++) {
    for (let x2 = 0; x2 <= n; x2++) {
      const x3 = n - x1 - x2
      if (x3 >= 0) {
        validCombinationsCount++
      }
    }
  }

  console.log(validCombinationsCount)
}

combinations(["25"])
