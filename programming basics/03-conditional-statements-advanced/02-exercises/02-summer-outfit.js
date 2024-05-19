function summerOutfit(input) {
  const degrees = parseInt(input[0])
  const timePeriod = input[1]

  let outfit
  let shoes

  const cold = Math.floor(Math.random() * 9) + 10
  const warm = Math.floor(Math.random() * 7) + 18
  const hot = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 24)) + 25

  switch (timePeriod) {
    case "Morning":
      switch (true) {
        case degrees <= cold:
          outfit = "Sweatshirts"
          shoes = "Sneakers"
          console.log(`It's ${degrees}, get your ${outfit} and ${shoes}.`)
          break
        case degrees <= warm:
          outfit = "Shirt"
          shoes = "Moccasins"
          console.log(`It's ${degrees}, get your ${outfit} and ${shoes}.`)
          break
        case degrees >= hot:
          outfit = "T-Shirt"
          shoes = "Sandals"
          console.log(`It's ${degrees}, get your ${outfit} and ${shoes}.`)
          break
      }
      break
    case "Afternoon":
      switch (true) {
        case degrees <= cold:
          outfit = "Shirt"
          shoes = "Moccasins"
          console.log(`It's ${degrees}, get your ${outfit} and ${shoes}.`)
          break
        case degrees <= warm:
          outfit = "T-Shirts"
          shoes = "Sandals"
          console.log(`It's ${degrees}, get your ${outfit} and ${shoes}.`)
          break
        case degrees >= hot:
          outfit = "Swim Suit"
          shoes = "Barefoot"
          console.log(`It's ${degrees}, get your ${outfit} and ${shoes}.`)
          break
        default:
          outfit = "Shirt"
          shoes = "Moccasins"
          console.log(`It's ${degrees}, get your ${outfit} and ${shoes}.`)
          break
      }
      break
  }
}

summerOutfit(["16", "Morning"])
