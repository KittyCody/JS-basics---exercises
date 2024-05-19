function happyCatParking(input) {
  const daysNum = parseInt(input[0])
  const hoursPerDay = parseInt(input[1])

  let total = 0

  for (let day = 1; day <= daysNum; day++) {
    let dayPrice = 0

    for (let hour = 1; hour <= hoursPerDay; hour++) {
      if (hour % 2 === 0 && day % 2 !== 0) {
        dayPrice += 1.25
      } else if (hour % 2 !== 0 && day % 2 === 0) {
        dayPrice += 2.5
      } else {
        dayPrice += 1
      }
    }

    total += dayPrice
    console.log(`Day: ${day} - ${dayPrice.toFixed(2)} leva`)
  }

  console.log(`Total: ${total.toFixed(2)} leva`)
}

happyCatParking([5, 2])
