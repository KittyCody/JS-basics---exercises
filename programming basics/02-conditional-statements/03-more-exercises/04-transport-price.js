function transportPrice(input) {
  const Kilometers = parseInt(input[0])
  const dayOrNight = input[1]

  let price

  if (Kilometers >= 100) {
    price = Kilometers * 0.06
  } else if (Kilometers >= 20) {
    price = Kilometers * 0.09
  } else {
    if (dayOrNight === "day") {
      price = Kilometers * 0.79 + 0.7
    } else {
      price = Kilometers * 0.9 + 0.7
    }
  }
  console.log(price.toFixed(2))
}

transportPrice([180, "night"])
