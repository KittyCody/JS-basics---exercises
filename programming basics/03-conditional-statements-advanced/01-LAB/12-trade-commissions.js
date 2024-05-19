function calculateCommission(input) {
  const city = input[0]
  const salesVolume = parseFloat(input[1])

  if (
    isNaN(salesVolume) ||
    salesVolume < 0 ||
    !["Sofia", "Varna", "Plovdiv"].includes(city)
  ) {
    return "error"
  }

  let commissionRate

  switch (city) {
    case "Sofia":
      switch (true) {
        case salesVolume <= 500:
          commissionRate = 0.05
          break
        case salesVolume <= 1000:
          commissionRate = 0.07
          break
        case salesVolume <= 10000:
          commissionRate = 0.08
          break
        default:
          commissionRate = 0.12
      }
      break
    case "Varna":
      switch (true) {
        case salesVolume <= 500:
          commissionRate = 0.045
          break
        case salesVolume <= 1000:
          commissionRate = 0.075
          break
        case salesVolume <= 10000:
          commissionRate = 0.1
          break
        default:
          commissionRate = 0.13
      }
      break
    case "Plovdiv":
      switch (true) {
        case salesVolume <= 500:
          commissionRate = 0.055
          break
        case salesVolume <= 1000:
          commissionRate = 0.08
          break
        case salesVolume <= 10000:
          commissionRate = 0.12
          break
        default:
          commissionRate = 0.145
      }
      break
  }

  const commission = salesVolume * commissionRate
  return commission.toFixed(2)
}

console.log(calculateCommission(["Sofia", "1500"]))
console.log(calculateCommission(["Plovdiv", "499.99"]))
console.log(calculateCommission(["Varna", "3874.50"]))
console.log(calculateCommission(["Kaspichan", "-50"]))
