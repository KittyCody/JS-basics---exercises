function multiplicationTable(input) {
  const num = parseInt(input)

  if (num < 11 && num > 0) {
    for (let i = 1; i <= 10; i++) {
      const result = num * i
      console.log(`${i} * ${num} = ${result}`)
    }
  } else {
    console.log("Input must be a number between 1 and 10.")
  }
}

multiplicationTable("5")
