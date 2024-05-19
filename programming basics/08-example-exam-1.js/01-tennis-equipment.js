function tennisEquipment(input) {
  const tennisRacketPrice = parseFloat(input.shift())
  const numTennisRackets = parseInt(input.shift())
  const basketsNum = parseInt(input.shift())

  let otherCosts = 0
  let totalCost = 0

  const basketCost = tennisRacketPrice / 6

  const totalRacketsCost = numTennisRackets * tennisRacketPrice
  const totalBasketCost = basketsNum * basketCost
  totalCost += totalBasketCost + totalRacketsCost
  otherCosts = totalCost * 0.2

  totalCost += otherCosts

  const djokovicPart = Math.floor(totalCost / 8)
  const sponsorsPart = Math.ceil((totalCost * 7) / 8)

  console.log(`Price to be paid by Djokovic ${djokovicPart}`)
  console.log(`Price to be paid by sponsors ${sponsorsPart}`)
}

tennisEquipment([386, 7, 4])
