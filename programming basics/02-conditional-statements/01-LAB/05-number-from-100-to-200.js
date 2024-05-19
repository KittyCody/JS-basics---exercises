function numberCheck(num) {
  const typedNumber = Number(num[0])

  if (typedNumber < 100) {
    console.log("Less than 100")
  } else if (num >= 100 && num < 201) {
    console.log("Between 100 and 200")
  } else if (num > 200) {
    console.log("Greater than 200")
  }
}

numberCheck(["130"])
