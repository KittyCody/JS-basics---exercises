function isFoodEnough(input) {
  const daysOfAbsence = parseInt(input[0])
  const foodLeft = parseInt(input[1])
  const dogFoodPerDayInKg = parseFloat(input[2])
  const catFoodPerDayInKg = parseFloat(input[3])
  const turtleFoodPerDayInGrams = parseFloat(input[4])

  const dogFoodInTotal = dogFoodPerDayInKg * daysOfAbsence
  const catFoodInTotal = catFoodPerDayInKg * daysOfAbsence
  const turtleFoodInTotal = (turtleFoodPerDayInGrams * daysOfAbsence) / 1000
  const totalFoodNeeded = dogFoodInTotal + catFoodInTotal + turtleFoodInTotal

  if (totalFoodNeeded <= foodLeft) {
    const foodDifference = foodLeft - totalFoodNeeded

    console.log(`${Math.floor(foodDifference)} kilos of food left.`)
  } else {
    const extraFoodNeeded = totalFoodNeeded - foodLeft
    console.log(`${Math.ceil(extraFoodNeeded)} more kilos of food are needed.
    `)
  }
}

isFoodEnough(["5", "10", "2.1", "0.8", "321"])
