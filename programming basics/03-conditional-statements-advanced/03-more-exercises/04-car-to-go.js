function rentACar(input) {
  const budget = parseFloat(input[0])
  const season = input[1]

  let classCar
  let typeCar
  let carPrice

  if (budget <= 100) {
    classCar = "Economy class"
    if (season === "Summer") {
      typeCar = "Cabrio"
      carPrice = budget * 0.35
    } else if (season === "Winter") {
      typeCar = "Jeep"
      carPrice = budget * 0.65
    }
  } else if (budget > 100 && budget <= 500) {
    classCar = "Compact class"
    if (season === "Summer") {
      typeCar = "Cabrio"
      carPrice = budget * 0.45
    } else if (season === "Winter") {
      typeCar = "Jeep"
      carPrice = budget * 0.8
    }
  } else if (budget > 500) {
    classCar = "Luxury class"
    typeCar = "Jeep"
    carPrice = budget * 0.9
  }
  console.log(`${classCar}`)
  console.log(`${typeCar} - ${carPrice.toFixed(2)}`)
}

rentACar(["70.50", "Winter"])
