function giftPrice(input) {
  const numMagnolias = parseInt(input[0])
  const numHyacinth = parseInt(input[1])
  const numRoses = parseInt(input[2])
  const numCactuses = parseInt(input[3])
  const giftPrice = parseFloat(input[4])

  const magnoliasPrice = numMagnolias * 3.25
  const hyacinthPrice = numHyacinth * 4
  const rosesPrice = numRoses * 3.5
  const cactusesPrice = numCactuses * 8
  let totalMoneyEarned =
    (magnoliasPrice + hyacinthPrice + rosesPrice + cactusesPrice) * 0.95

  totalMoneyEarned = totalMoneyEarned.toFixed(2)
  console.log(totalMoneyEarned)

  if (totalMoneyEarned >= giftPrice) {
    const remainingMoney = totalMoneyEarned - giftPrice
    console.log(`She is left with ${Math.floor(remainingMoney)} leva.`)
  } else {
    const extraMoneyNeeded = giftPrice - totalMoneyEarned
    console.log(`She will have to borrow ${Math.ceil(extraMoneyNeeded)} leva.`)
  }
}

giftPrice(["2", "3", "5", "1", "50"])
