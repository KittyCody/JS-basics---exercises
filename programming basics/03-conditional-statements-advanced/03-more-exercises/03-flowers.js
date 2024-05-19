function bouquetPrice(input) {
  const ChrysanthemumsBought = parseInt(input[0])
  const RosesBought = parseInt(input[1])
  const tulipsBought = parseInt(input[2])
  const season = input[3]
  const typeOfDay = input[4]

  let chrysanthemumsPrice
  let rosesPrice
  let tulipsPrice

  switch (season) {
    case "Spring":
    case "Summer":
      chrysanthemumsPrice = ChrysanthemumsBought * 2
      rosesPrice = RosesBought * 4.1
      tulipsPrice = tulipsBought * 2.5
      break
    case "Autumn":
    case "Winter":
      chrysanthemumsPrice = ChrysanthemumsBought * 3.75
      rosesPrice = RosesBought * 4.5
      tulipsPrice = tulipsBought * 4.15
      break
  }

  if (typeOfDay === "Y") {
    chrysanthemumsPrice *= 1.15
    rosesPrice *= 1.15
    tulipsPrice *= 1.15
  }

  const totalFlowersBought = ChrysanthemumsBought + RosesBought + tulipsBought
  let totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice

  if (season === "Spring" && tulipsBought > 7) {
    totalPrice -= totalPrice * 0.05
  } else if (season === "Winter" && RosesBought >= 10) {
    totalPrice -= totalPrice * 0.1
  }

  if (totalFlowersBought > 20) {
    totalPrice -= totalPrice * 0.2
  }
  const arrangementPrice = 2
  totalPrice += arrangementPrice
  console.log(totalPrice.toFixed(2))
}

bouquetPrice(["10", "10", "10", "Autumn", "N"])
