function bills(input) {
  const monthsNum = parseInt(input[0])

  let water = 0
  let internet = 0
  let other = 0
  let average = 0
  let electricity = 0

  for (let i = 1; i <= monthsNum; i++) {
    const currentElectricity = parseFloat(input[i])
    electricity += currentElectricity

    water = monthsNum * 20
    internet = monthsNum * 15
    other = electricity + water + internet
    other += other * 0.2
  }
  const totalBill = electricity + water + internet + other
  average = totalBill / monthsNum

  console.log(`Electricity: ${electricity.toFixed(2)} lv`)
  console.log(`Water: ${water.toFixed(2)} lv`)
  console.log(`Internet: ${internet.toFixed(2)} lv`)
  console.log(`Other: ${other.toFixed(2)} lv`)
  console.log(`Average: ${average.toFixed(2)} lv`)
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])
