function journey(input) {
  const budget = parseFloat(input[0])
  const season = input[1]

  let place
  let moneySpent

  const smallBudget = budget <= 100
  const midBudget = budget >= 100 && budget <= 1000
  const bigBudget = budget > 1000
  let typeOfPlace

  switch (season) {
    case "summer":
      typeOfPlace = "Camp"
      if (smallBudget) {
        place = "Somewhere in Bulgaria"
        moneySpent = budget * 0.3
      } else if (midBudget) {
        place = "Somewhere in Balkans"
        moneySpent = budget * 0.4
      }
      break
    case "winter":
      typeOfPlace = "Hotel"
      if (smallBudget) {
        place = "Somewhere in Bulgaria"
        moneySpent = budget * 0.7
      } else if (midBudget) {
        place = "Somewhere in Balkans"
        moneySpent = budget * 0.8
      }
      break
  }

  if (bigBudget) {
    typeOfPlace = "Hotel"
    place = "Somewhere in Europe"
    moneySpent = budget * 0.9
  }

  console.log(`${place}\n${typeOfPlace} - ${moneySpent.toFixed(2)}`)
}

journey([1500, "summer"])
