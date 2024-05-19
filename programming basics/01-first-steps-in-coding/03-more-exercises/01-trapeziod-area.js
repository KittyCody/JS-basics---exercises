function numWorkPlaces(input) {
  const b1 = Number(input[0])
  const b2 = Number(input[1])
  const h = Number(input[2])

  const trapez = ((b1 + b2) * h) / 2
  console.log(trapez.toFixed(2))
}
trapeze(["8", "13", "7"])
