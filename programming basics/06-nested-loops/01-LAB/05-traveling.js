function traveling(input) {
  let destination = input.shift()

  while (destination !== "End") {
    let minimalBudget = Number(input.shift())
    let currentBudget = 0

    while (currentBudget < minimalBudget) {
      let currentSum = Number(input.shift())
      currentBudget += currentSum
    }

    console.log(`Going to ${destination}!`)
    destination = input.shift()
  }
}

traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
])
