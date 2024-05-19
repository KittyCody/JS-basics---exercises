function vetParking(input) {
  const daysNum = parseInt(input.shift())
  const hoursPerDay = parseInt(input.shift())

  let totalTax = 0

  for (let currentDay = 1; currentDay <= daysNum; currentDay++) {
    let taxPerDay = 0
    for (let currentHour = 1; currentHour <= hoursPerDay; currentHour++) {
      let currentTax = 0
      if (currentDay % 2 === 0 && currentHour % 2 !== 0) {
        currentTax = 2.5
      } else if (currentDay % 2 !== 0 && currentHour % 2 === 0) {
        currentTax = 1.25
      } else {
        currentTax = 1
      }
      taxPerDay += currentTax
    }
    totalTax += taxPerDay

    console.log(`Day: ${currentDay} - ${taxPerDay.toFixed(2)} leva.`)
  }
  console.log(`Total: ${totalTax.toFixed(2)} leva`)
}

vetParking([5, 2])
