function buyTickets(input) {
  const budget = parseFloat(input[0])
  const category = input[1]
  const numPeople = parseInt(input[2])

  let transportCost

  if (numPeople <= 4) {
    transportCost = budget * 0.75
  } else if (numPeople >= 5 && numPeople <= 9) {
    transportCost = budget * 0.6
  } else if (numPeople >= 10 && numPeople <= 24) {
    transportCost = budget * 0.5
  } else if (numPeople >= 25 && numPeople <= 49) {
    transportCost = budget * 0.4
  } else {
    transportCost = budget * 0.25
  }

  const difference = budget - transportCost

  const vipTicket = numPeople * 499.99
  const normalTicket = numPeople * 249.99

  switch (category) {
    case "VIP":
      if (difference >= vipTicket) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
      } else {
        const extraMoneyNeeded = vipTicket - difference
        console.log(
          `Not enough money! You need ${extraMoneyNeeded.toFixed(2)} leva.`
        )
      }
      break
    case "Normal":
      if (difference >= normalTicket) {
        const remainingMoney = difference - normalTicket
        console.log(`Yes! You have ${remainingMoney.toFixed(2)} leva left.`)
      } else {
        const extraMoneyNeeded = normalTicket - difference
        console.log(
          `Not enough money! You need ${extraMoneyNeeded.toFixed(2)} leva.`
        )
      }
      break
  }
}

buyTickets(["1000", "Normal", "1"])
buyTickets(["30000", "VIP", "49"])
