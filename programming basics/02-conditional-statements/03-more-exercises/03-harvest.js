function calculateWine(input) {
  let X = input[0]
  let Y = input[1]
  let Z = input[2]
  let workers = input[3]

  let totalGrapes = X * Y
  let wineProduced = Math.floor((0.4 * totalGrapes) / 2.5)
  let wineNeeded = Z

  if (wineProduced < wineNeeded) {
    let shortage = wineNeeded - wineProduced
    console.log(
      `It will be a tough winter! More ${shortage} liters wine needed.`
    )
  } else {
    let leftoverWine = wineProduced - wineNeeded
    let winePerPerson = Math.ceil(leftoverWine / workers)
    console.log(`Good harvest this year! Total wine: ${wineProduced} liters.`)
    console.log(
      `${leftoverWine} liters left -> ${winePerPerson} liters per person.`
    )
  }
}

calculateWine(["650", "2", "175", "3"])
