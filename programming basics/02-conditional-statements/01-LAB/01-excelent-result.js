function isExcellent(input) {
  const note = Number(input[0])
  if (note === 5.5 || note === 6) {
    console.log("Excellent!")
  } else {
    console.log(" ")
  }
  return
}

isExcellent(["7"])
