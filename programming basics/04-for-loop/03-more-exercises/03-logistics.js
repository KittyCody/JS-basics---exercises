function calculateTransportation(input) {
  const cargoNum = Number(input[0])

  let totalTons = 0
  let microbusTons = 0
  let truckTons = 0
  let trainTons = 0

  for (let i = 1; i <= cargoNum; i++) {
    let tons = Number(input[i])
    totalTons += tons

    if (tons <= 3) {
      microbusTons += tons
    } else if (tons <= 11) {
      truckTons += tons
    } else {
      trainTons += tons
    }
  }
  const microbusPercentage = ((microbusTons / totalTons) * 100).toFixed(2) + "%"
  const truckPercentage = ((truckTons / totalTons) * 100).toFixed(2) + "%"
  const trainPercentage = ((trainTons / totalTons) * 100).toFixed(2) + "%"
  const averagePercent = (
    (microbusTons * 200 + truckTons * 175 + trainTons * 120) /
    totalTons
  ).toFixed(2)

  console.log(averagePercent)
  console.log(microbusPercentage)
  console.log(truckPercentage)
  console.log(trainPercentage)
}

calculateTransportation(["5", "2", "10", "20", "1", "7"])
