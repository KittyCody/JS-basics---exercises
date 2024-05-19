function accountBalance(input) {
  let index = 0
  let updateSome = input[index++]
  let total = 0

  while (updateSome !== "NoMoreMoney") {
    const currentNum = Number(updateSome)

    if (currentNum > 0) {
      console.log("Increase: " + currentNum.toFixed(2))
      total += currentNum
    } else {
      console.log("Invalid operation!")
      break
    }

    updateSome = input[index++]
  }
  console.log("Total: " + total.toFixed(2))
}

accountBalance(["120", "45.55", "-150"])
