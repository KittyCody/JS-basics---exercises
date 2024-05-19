function familyVacation(input) {
  let budget = parseFloat(input[0])
  const nights = parseInt(input[1])
  let pricePerNight = parseFloat(input[2])
  const percentTaxes = parseInt(input[3])

  if (nights > 7) {
    pricePerNight -= pricePerNight * 0.05
  }

  const allNightsPrice = nights * pricePerNight
  const totalAfterTax = budget - (budget * percentTaxes) / 100
  const difference = Math.abs(totalAfterTax - allNightsPrice)

  if (totalAfterTax >= allNightsPrice) {
    console.log(
      `Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`
    )
  } else {
    console.log(`${difference.toFixed(2)} leva needed.`)
  }
}

familyVacation([500, 7, 66, 15])
