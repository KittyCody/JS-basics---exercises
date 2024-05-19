function personalTitles(input) {
  const age = parseFloat(input[0])
  const gender = input[1]

  if (gender === "m") {
    if (age < 16) console.log("Master")
    if (age >= 16) console.log("Mr.")
    return
  }

  if (gender === "f") {
    if (age < 16) console.log("Miss")
    if (age >= 16) console.log("Ms.")
    return
  }
}

personalTitles(["30", "m"])
