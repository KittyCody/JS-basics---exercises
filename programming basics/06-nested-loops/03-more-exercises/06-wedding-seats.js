function weddingSeats(input) {
  const lastSector = input[0].charCodeAt(0)
  const rowsFirstSector = parseInt(input[1])
  const seatsNumOddRow = parseInt(input[2])

  let totalSeats = 0

  let currentSector = "A"
  currentSector = currentSector.charCodeAt(0)
  let currentRowsCount = rowsFirstSector

  for (; currentSector <= lastSector; currentSector++) {
    for (let row = 1; row <= currentRowsCount; row++) {
      let seatsCount = seatsNumOddRow
      const isEvenRow = row % 2 === 0
      if (isEvenRow) {
        seatsCount += 2
      }

      totalSeats += seatsCount

      for (let seat = 0; seat < seatsCount; seat++) {
        const char = "a".charCodeAt(0) + seat

        console.log(
          `${String.fromCharCode(currentSector)}${row}${String.fromCharCode(
            char
          )}`
        )
      }
    }

    currentRowsCount++
  }
  console.log(totalSeats)
}

weddingSeats(["B", "3", "2"])
