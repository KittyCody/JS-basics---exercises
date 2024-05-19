function flowerBudget(input) {
  const typeOfFlower = input[0]
  const numFlowers = parseInt(input[1])
  const budget = parseInt(input[2])

  let price
  let difference

  const rosesPrice = numFlowers * 5
  const dahliasPrice = numFlowers * 3.8
  const tulipsPrice = numFlowers * 2.8
  const narcissusPrice = numFlowers * 3
  const gladiolusPrice = numFlowers * 2.5

  switch (typeOfFlower) {
    case "Roses":
      if (numFlowers >= 80) {
        price = rosesPrice - rosesPrice * 0.1
      } else {
        price = rosesPrice
      }
      break
    case "Dahlias":
      if (numFlowers >= 90) {
        price = dahliasPrice - dahliasPrice * 0.15
      } else {
        price = dahliasPrice
      }
      break
    case "Tulips":
      if (numFlowers >= 80) {
        price = tulipsPrice - tulipsPrice * 0.15
      } else {
        price = tulipsPrice
      }
      break
    case "Narcissus":
      if (numFlowers < 120) {
        price = narcissusPrice + narcissusPrice * 0.15
      } else {
        price = narcissusPrice
      }
      break
    case "Gladiolus":
      if (numFlowers < 80) {
        price = gladiolusPrice + gladiolusPrice * 0.2
      } else {
        price = gladiolusPrice
      }
      break
  }
  if (budget >= price) {
    difference = (budget - price).toFixed(2)
    console.log(
      `Hey, you have a great garden with ${numFlowers} ${typeOfFlower} and ${difference} leva left.`
    )
  } else {
    difference = (price - budget).toFixed(2)
    console.log(`Not enough money, you need ${difference} leva more.`)
  }
}

flowerBudget(["Gladiolus", "79", "470"])
