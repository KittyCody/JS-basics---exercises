function solve(input) {
  let n = Number(input.shift())
  let oddSum = 0
  let oddMin = 1000000000.0
  let oddMax = -1000000000.0
  let evenSum = 0
  let evenMin = 1000000000.0
  let evenMax = -1000000000.0

  for (let i = 1; i <= n; i++) {
    let num = Number(input.shift())

    if (i % 2 === 0) {
      evenSum += num
      evenMin = Math.min(evenMin, num)
      evenMax = Math.max(evenMax, num)
    } else {
      oddSum += num
      oddMin = Math.min(oddMin, num)
      oddMax = Math.max(oddMax, num)
    }
  }

  let result = `OddSum=${oddSum.toFixed(2)}, OddMin=${
    oddMin !== 1000000000.0 ? oddMin.toFixed(2) : "No"
  }, OddMax=${
    oddMax !== -1000000000.0 ? oddMax.toFixed(2) : "No"
  }, EvenSum=${evenSum.toFixed(2)}, EvenMin=${
    evenMin !== 1000000000.0 ? evenMin.toFixed(2) : "No"
  }, EvenMax=${evenMax !== -1000000000.0 ? evenMax.toFixed(2) : "No"}`

  console.log(result)
}

// Example usage:
solve([6, 2, 3, 5, 4, 2, 1])
