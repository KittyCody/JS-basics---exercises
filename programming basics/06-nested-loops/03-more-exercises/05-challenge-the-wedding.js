function challengeTheWedding(input) {
  const men = parseInt(input[0])
  const women = parseInt(input[1])
  const tables = parseInt(input[2])

  let buffer = ""
  let coupleCount = 0

  let run = true

  for (let man = 1; man <= men && run; man++) {
    for (let woman = 1; woman <= women && run; woman++) {
      buffer += `(${man} <-> ${woman}) `
      coupleCount++
      if (coupleCount >= tables) {
        run = false
      }
    }
  }

  console.log(buffer.trim())
}

challengeTheWedding([5, 8, 40])
