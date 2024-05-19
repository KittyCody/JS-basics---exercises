function fishermenBudget(input) {
  const groupBudget = parseInt(input[0])
  const season = input[1]
  const numFishermen = parseInt(input[2])

  const isSpring = season === "Spring"
  const isSummer = season === "Summer"
  const isAutumn = season === "Autumn"
  const isWinter = season === "Winter"

  const springPrice = 3000
  const summerAutumnPrice = 4200
  const winterPrice = 2600

  const isGroupSmall = numFishermen <= 6
  const isGroupMedium = numFishermen > 6 && numFishermen < 12
  const isGroupBig = numFishermen > 11
  const isNumFishermenEven = numFishermen % 2 === 0

  let price

  if (isSpring) {
    price = springPrice
    if (isNumFishermenEven) price -= price * 0.05
  } else if (isSummer || isAutumn) {
    price = summerAutumnPrice
    if (isSummer && isNumFishermenEven) price -= price * 0.05
  } else if (isWinter) {
    price = winterPrice
    if (isNumFishermenEven) price -= price * 0.05
  }

  switch (true) {
    case isGroupSmall:
      price -= price * 0.1
      break
    case isGroupMedium:
      price -= price * 0.15
      break
    case isGroupBig:
      price -= price * 0.25
      break
  }

  if (groupBudget >= price) {
    const difference = groupBudget - price
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
  } else {
    const extraMoneyNeeded = price - groupBudget
    console.log(
      `Not enough money! You need ${extraMoneyNeeded.toFixed(2)} leva.`
    )
  }
}

fishermenBudget([3000, "Summer", 11])
