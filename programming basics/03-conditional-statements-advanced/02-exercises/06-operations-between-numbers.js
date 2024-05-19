function numbersOperations(input) {
  const num1 = parseInt(input[0])
  const num2 = parseInt(input[1])
  const operator = input[2]

  let result
  let evenOrOdd

  if (operator === "+" || operator === "-" || operator === "*") {
    if (operator === "+") {
      result = num1 + num2
      evenOrOdd = result % 2 === 0 ? "even" : "odd"
    } else if (operator === "-") {
      result = num1 - num2
      evenOrOdd = result % 2 === 0 ? "even" : "odd"
    } else if (operator === "*") {
      result = num1 * num2
      evenOrOdd = result % 2 === 0 ? "even" : "odd"
    }
    console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`)
  }

  if (operator === "/" || operator === "%") {
    if (num2 === 0) {
      console.log(`Cannot divide ${num1} by zero`)
      return
    }

    if (operator === "/") {
      result = num1 / num2
      console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`)
    } else if (operator === "%") {
      result = num1 % num2
      console.log(`${num1} ${operator} ${num2} = ${result}`)
    }
  }
}

numbersOperations(["10", "12", "+"])
// 10 + 12 = 22 - even
