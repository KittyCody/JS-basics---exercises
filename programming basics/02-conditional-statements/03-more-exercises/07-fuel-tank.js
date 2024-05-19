function fillTank(input) {
  const kindOfFuel = input[0]
  const fuelLiters = parseFloat(input[1])

  if (
    kindOfFuel === "diesel" ||
    kindOfFuel === "gasoline" ||
    kindOfFuel === "gas"
  ) {
    if (fuelLiters >= 25) {
      console.log(`You have enough ${kindOfFuel}.`)
    } else {
      console.log(`Fill your tank with ${kindOfFuel}!`)
    }
  } else {
    console.log("Invalid fuel!")
  }
}

fillTank(["kerosene", "200"])
