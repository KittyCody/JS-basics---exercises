function stayingCost(input) {
  const month = input[0]
  const numNights = parseInt(input[1])

  let apartmentCost
  let studioCost

  switch (month) {
    case "May":
    case "October":
      studioCost = numNights * 50
      if (numNights > 7 && numNights <= 14) {
        studioCost -= studioCost * 0.05
      } else if (numNights > 14) {
        studioCost -= studioCost * 0.3
      }

      apartmentCost = numNights * 65
      break

    case "June":
    case "September":
      studioCost = numNights * 75.2
      if (numNights > 14) {
        studioCost -= studioCost * 0.2
      }
      apartmentCost = numNights * 68.7
      break
    case "July":
    case "August":
      studioCost = numNights * 76
      apartmentCost = numNights * 77
      break
  }

  if (numNights > 14) {
    apartmentCost -= apartmentCost * 0.1
  }

  console.log(`Apartment: ${apartmentCost.toFixed(2)} lv.`)
  console.log(`Studio: ${studioCost.toFixed(2)} lv.`)
}
// stayingCost(["May", "15"])
// // Apartment: 877.50 lv. Studio: 525.00 lv
// stayingCost(["June", "14"])
// Apartment: 961.80 lv. Studio: 1052.80 lv.
stayingCost(["August", "20"])
// // Apartment: 1386.00 lv. Studio: 1520.00 lv.
