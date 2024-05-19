function touristStore(input) {
  const budget = parseFloat(input[0])

  let totalPrice = 0
  let itemsNum = 0

  for (let item = 1; item < input.length; item += 2) {
    const currentItem = input[item]
    if (currentItem === "Stop") {
      break
    }

    let currentItemPrice = parseFloat(input[item + 1])
    itemsNum++

    if (itemsNum % 3 === 0) {
      currentItemPrice -= currentItemPrice / 2
    }

    totalPrice += currentItemPrice

    if (totalPrice > budget) {
      const difference = totalPrice - budget
      console.log(`You don't have enough money!`)
      console.log(`You need ${difference.toFixed(2)} leva!`)
      return
    }
  }

  console.log(
    `You bought ${itemsNum} products for ${totalPrice.toFixed(2)} leva.`
  )
}

touristStore([54, "Thermal underwear", 24, "Sunscreen", 45])
