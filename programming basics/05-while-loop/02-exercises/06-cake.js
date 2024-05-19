function cake(input) {
  let index = 0
  const width = parseInt(input[index])
  index++

  const length = parseInt(input[index])
  index++

  let piecesLeft = width * length

  for (let i = index; i < input.length; i++) {
    if (input[i] === "STOP") {
      break
    }
    const currentPieces = parseInt(input[i])

    if (piecesLeft < 0) {
      break
    }
    piecesLeft -= currentPieces
  }
  if (piecesLeft > 0) {
    console.log(`${piecesLeft} pieces are left.`)
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(piecesLeft)} pieces more.`
    )
  }
}

cake(["10", "10", "20", "20", "20", "21", "20"])
cake(["10", "2", "2", "4", "6", "STOP", "2"])
