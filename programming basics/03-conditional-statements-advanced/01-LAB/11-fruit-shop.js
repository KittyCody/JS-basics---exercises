function fruitPrice(input) {
  const fruit = input[0]
  const dayOfTheWeek = input[1]
  const quantity = parseFloat(input[2])

  let price

  switch (dayOfTheWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          price = quantity * 2.5
          break
        case "apple":
          price = quantity * 1.2
          break
        case "orange":
          price = quantity * 0.85
          break
        case "grapefruit":
          price = quantity * 1.45
          break
        case "kiwi":
          price = quantity * 2.7
          break
        case "pineapple":
          price = quantity * 5.5
          break
        case "grapes":
          price = quantity * 3.85
          break
        default:
          console.log("error")
          return
      }
      break
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          price = quantity * 2.7
          break
        case "apple":
          price = quantity * 1.25
          break
        case "orange":
          price = quantity * 0.9
          break
        case "grapefruit":
          price = quantity * 1.6
          break
        case "kiwi":
          price = quantity * 3
          break
        case "pineapple":
          price = quantity * 5.6
          break
        case "grapes":
          price = quantity * 4.2
          break
        default:
          console.log("error")
          return
      }
      break
    default:
      console.log("error")
      return
  }

  console.log(price.toFixed(2))
}

fruitPrice(["apple", "Monday", 2])
