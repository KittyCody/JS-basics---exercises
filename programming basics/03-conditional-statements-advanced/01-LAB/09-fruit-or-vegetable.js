function typeOfFood(input) {
  const fruitOrVegetable = input[0]

  const fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"]
  const vegetables = ["tomato", "cucumber", "pepper", "carrot"]

  if (fruits.includes(fruitOrVegetable)) {
    console.log("fruit")
  } else if (vegetables.includes(fruitOrVegetable)) {
    console.log("vegetable")
  } else {
    console.log("unknown")
  }
}

typeOfFood(["cucumber"])
