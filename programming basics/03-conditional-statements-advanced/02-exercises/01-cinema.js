function cinemaMoneyEarned(input) {
  const typeOfMovie = input[0]
  const numRows = parseInt(input[1])
  const numColumns = parseInt(input[2])

  const pricePremiere = 12
  const standardPrice = 7.5
  const discount = 5

  let income = 0

  switch (typeOfMovie) {
    case "Premiere":
      income = numColumns * numRows * pricePremiere
      console.log(`${income.toFixed(2)} leva`)
      break
    case "Normal":
      income = numColumns * numRows * standardPrice
      console.log(`${income.toFixed(2)} leva`)
      break
    case "Discount":
      income = numColumns * numRows * discount
      console.log(`${income.toFixed(2)} leva`)
      break
    default:
      console.log("Invalid movie type")
  }
}

cinemaMoneyEarned(["Premiere", "10", "12"])
