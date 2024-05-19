function smallShop(input) {
  const product = input[0]
  const city = input[1]
  const quantity = parseFloat(input[2])
  let price

  switch (city) {
    case "Sofia":
      switch (product) {
        case "coffee":
          price = quantity * 0.5
          break
        case "water":
          price = quantity * 0.8
          break
        case "beer":
          price = quantity * 1.2
          break
        case "sweets":
          price = quantity * 1.45
          break
        case "peanuts":
          price = quantity * 1.6
          break
        default:
          console.log("Invalid product")
      }
      break
    case "Plovdiv":
      switch (product) {
        case "coffee":
          price = quantity * 0.4
          break
        case "water":
          price = quantity * 0.7
          break
        case "beer":
          price = quantity * 1.15
          break
        case "sweets":
          price = quantity * 1.3
          break
        case "peanuts":
          price = quantity * 1.5
          break
        default:
          console.log("Invalid product")
      }
      break
    case "Varna":
      switch (product) {
        case "coffee":
          price = quantity * 0.45
          break
        case "water":
          price = quantity * 0.7
          break
        case "beer":
          price = quantity * 1.1 // corrected beer price
          break
        case "sweets":
          price = quantity * 1.35
          break
        case "peanuts":
          price = quantity * 1.55
          break
        default:
          console.log("Invalid product")
      }
      break
    default:
      console.log("Invalid city")
  }
  console.log(price)
}

smallShop(["coffee", "Varna", "2"])
