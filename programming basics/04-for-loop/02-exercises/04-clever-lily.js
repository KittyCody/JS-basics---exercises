function cleverLily(input) {
  const age = parseInt(input[0])
  const washingMachinePrice = parseFloat(input[1])
  const toyPricePerOne = parseInt(input[2])

  let money = 0
  let toys = 0
  let currentMoney = 10

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += currentMoney
      currentMoney += 10
      money--
    } else {
      toys += 1
    }
  }

  money += toys * toyPricePerOne
  let difference = Math.abs(money - washingMachinePrice)
  if (money >= washingMachinePrice) {
    console.log(`Yes! ${difference.toFixed(2)}`)
  } else {
    console.log(`No! ${difference.toFixed(2)}`)
  }
}

cleverLily(["21", "1570.98", "3"])
