function numberInRange(input) {
  const userNum = parseInt(input[0])

  if (userNum >= -100 && userNum <= 100) {
    if (userNum !== 0) {
      console.log("Yes")
    } else {
      console.log("No")
    }
  } else {
    console.log("No")
  }
}

numberInRange([0])
