function invalidNumber(input) {
  const validNum = parseInt(input[0])

  if ((validNum > 99 && validNum < 201) || validNum === 0) return
  else {
    console.log("invalid")
  }
}

invalidNumber(["75"])
