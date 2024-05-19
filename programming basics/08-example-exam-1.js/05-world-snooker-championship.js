function ticketsChampionship(input) {
  const stageOfTheChampionship = input.shift()
  const ticketType = input.shift()
  const numTickets = parseInt(input.shift())
  const photoWithThePrice = input.shift()

  let priceTicket = 0

  switch (ticketType) {
    case "Standard":
      switch (stageOfTheChampionship) {
        case "Quarter final":
          priceTicket = 55.5
          break
        case "Semi final":
          priceTicket = 75.88
          break
        case "Final":
          priceTicket = 110.1
          break
      }
      break
    case "Premium":
      switch (stageOfTheChampionship) {
        case "Quarter final":
          priceTicket = 105.2
          break
        case "Semi final":
          priceTicket = 125.22
          break
        case "Final":
          priceTicket = 160.66
          break
      }
      break
    case "VIP":
      switch (stageOfTheChampionship) {
        case "Quarter final":
          priceTicket = 118.9
          break
        case "Semi final":
          priceTicket = 300.4
          break
        case "Final":
          priceTicket = 400
          break
      }
      break
  }

  let trophyPic = 0
  let totalPrice = numTickets * priceTicket

  if (photoWithThePrice === "Y") {
    if (totalPrice > 4000) {
      totalPrice -= totalPrice * 0.25
    } else if (totalPrice > 2500) {
      totalPrice -= totalPrice * 0.1
      trophyPic = numTickets * 40
    } else {
      trophyPic = numTickets * 40
    }
  } else {
    if (totalPrice > 2500) {
      totalPrice -= totalPrice * 0.1
    }
  }

  totalPrice += trophyPic

  console.log(totalPrice.toFixed(2))
}

ticketsChampionship(["Final", "Premium", 25, "Y"])
ticketsChampionship(["Semi final", "VIP", 9, "Y"])
ticketsChampionship(["Quarter final", "Standard", 11, "N"])
