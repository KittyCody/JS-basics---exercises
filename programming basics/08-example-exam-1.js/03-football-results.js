function footballResults(input) {
  let teamWon = 0
  let teamLost = 0
  let drawnGames = 0

  for (let i = 0; i < input.length; i++) {
    let result = input[i]
    let scores = result.split(":")
    let team1Score = Number(scores[0])
    let team2Score = Number(scores[1])

    if (team1Score > team2Score) {
      teamWon++
    } else if (team1Score < team2Score) {
      teamLost++
    } else {
      drawnGames++
    }
  }

  console.log(`Team won ${teamWon} games.`)
  console.log(`Team lost ${teamLost} games.`)
  console.log(`Drawn games: ${drawnGames}`)
}

footballResults(["4:2", "0:3", "1:0"])
