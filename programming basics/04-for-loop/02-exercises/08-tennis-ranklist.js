function tennisRankList(input) {
  let index = 0
  const tournamentsNum = Number(input[index])
  index++
  const startingPoints = Number(input[index])
  index++
  let winCount = 0
  let currentPoints = 0

  for (let i = 0; i < tournamentsNum; i++) {
    let result = input[index]
    index++
    switch (result) {
      case "W":
        currentPoints += 2000
        winCount++
        break
      case "F":
        currentPoints += 1200
        break
      case "SF":
        currentPoints += 720
        break
    }
  }

  let finalPoints = startingPoints + currentPoints
  let averagePoints = Math.floor(currentPoints / tournamentsNum)
  let wonTournaments = (winCount / tournamentsNum) * 100

  console.log(`Final points: ${finalPoints}`)
  console.log(`Average points: ${averagePoints}`)
  console.log(`${wonTournaments.toFixed(2)}%`)
}

tennisRankList(["5", "1400", "F", "SF", "W", "W", "SF"])
