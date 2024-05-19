function reportSystem(input) {
  const expectedSum = parseInt(input[0])
  let index = 1

  let cartTransaction = 0
  let cashTransaction = 0
  let totalCashTransactions = 0
  let totalCartTransactions = 0

  for (let i = index; i < input.length; i++) {
    if (input[i] === "End") {
      console.log("Failed to collect required money for charity.")
      break
    }

    const itemPrice = Number(input[i])

    if (cartTransaction + cashTransaction >= expectedSum) {
      break
    }

    if (i % 2 === 0) {
      if (itemPrice < 10) {
        console.log("Error in transaction!")
      } else {
        console.log("Product sold!")
        cartTransaction += itemPrice
        totalCartTransactions++
      }
    } else {
      if (itemPrice > 100) {
        console.log("Error in transaction!")
      } else {
        console.log("Product sold!")
        cashTransaction += itemPrice
        totalCashTransactions++
      }
    }
  }

  const totalSum = cartTransaction + cashTransaction
  if (totalSum >= expectedSum) {
    const averageCashPayPerPerson = (
      cashTransaction / totalCashTransactions
    ).toFixed(2)
    const averageCartPayPerPerson = (
      cartTransaction / totalCartTransactions
    ).toFixed(2)
    console.log(`Average CS: ${averageCashPayPerPerson}`)
    console.log(`Average CC: ${averageCartPayPerPerson}`)
  }
}

reportSystem([500, 120, 8, 63, 256, 78, 317])
