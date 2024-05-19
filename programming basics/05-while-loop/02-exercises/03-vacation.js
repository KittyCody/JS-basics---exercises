function vacationBudget(input) {
  let neededMoney = parseFloat(input[0])
  let availableMoney = parseFloat(input[1])
  let consecutiveSpendDays = 0
  let totalDays = 0

  let i = 2
  while (i < input.length) {
    let action = input[i]
    let amount = parseFloat(input[i + 1])

    if (action === "spend") {
      consecutiveSpendDays++
      availableMoney -= amount

      if (availableMoney < 0) {
        availableMoney = 0
      }

      if (consecutiveSpendDays === 5) {
        return `You can't save the money.\n${totalDays}`
      }
    } else if (action === "save") {
      consecutiveSpendDays = 0
      availableMoney += amount
    }

    totalDays++
    i += 2

    if (availableMoney >= neededMoney) {
      return `You saved the money for ${totalDays} days.`
    }
  }

  return `You can't save the money.\n${totalDays}`
}

// Test cases
console.log(vacationBudget(["2000", "1000", "spend", "1200", "save", "2000"]))
console.log(
  vacationBudget([
    "110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
  ])
)
console.log(
  vacationBudget([
    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100",
  ])
)
