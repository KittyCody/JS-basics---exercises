function oscars(input) {
  let index = 0
  const actorName = input[index]
  index++
  let points = Number(input[index])
  index++
  let juryNum = parseInt(input[index])
  index++

  let hasNominee = false

  for (let i = 1; i <= juryNum; i++) {
    let name = input[index]
    index++
    let tempPoints = Number(input[index])
    index++
    let result = (name.length * tempPoints) / 2
    points += result
    if (points > 1250.5) {
      hasNominee = true
      break
    }
  }
  if (hasNominee) {
    console.log(
      `Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(
        1
      )}!`
    )
  } else {
    let difference = 1250.5 - points
    console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`)
  }
}

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
])
