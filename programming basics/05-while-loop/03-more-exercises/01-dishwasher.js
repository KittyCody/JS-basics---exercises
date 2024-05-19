function dishwasher(input) {
  const bottleNum = Number(input[0])
  const detergentQuantity = bottleNum * 750
  let availableDetergent = detergentQuantity

  let index = 1

  const dishWashMl = 5
  const potWashMl = 15

  let dishCounter = 0
  let potCounter = 0
  let tonyCounter = 1

  while (index < input.length) {
    if (input[index] === "End") {
      break
    }

    const toWash = Number(input[index])

    if (tonyCounter === 3) {
      tonyCounter = 0
      potCounter += toWash
      availableDetergent -= toWash * potWashMl
    } else {
      dishCounter += toWash
      availableDetergent -= toWash * dishWashMl
    }
    tonyCounter++
    index++
  }

  if (availableDetergent >= 0) {
    console.log(`Detergent was enough!`)
    console.log(`${dishCounter} dishes and ${potCounter} pots were washed.`)
    console.log(`Leftover detergent ${availableDetergent} ml.`)
  } else {
    console.log(
      `Not enough detergent, ${-availableDetergent} ml. more necessary!`
    )
  }
}

dishwasher([1, 10, 15, 10, 12, 13, 30])
