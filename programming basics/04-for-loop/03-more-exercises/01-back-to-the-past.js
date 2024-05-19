function backToThePast(input) {
  const inheritance = parseFloat(input[0])
  const yearToLive = parseInt(input[1])
  let moneyLeft = inheritance
  let age = 18

  for (let i = 1800; i <= yearToLive; i++) {
    if (i % 2 === 0) {
      moneyLeft -= 12000
    } else {
      age++
      moneyLeft -= 12000 + 50 * age
    }
  }

  if (moneyLeft >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${moneyLeft.toFixed(
        2
      )} dollars left.`
    )
  } else {
    console.log(
      `He will need ${Math.abs(moneyLeft).toFixed(2)} dollars to survive.`
    )
  }
}

backToThePast(["100000.15", "1808"])
