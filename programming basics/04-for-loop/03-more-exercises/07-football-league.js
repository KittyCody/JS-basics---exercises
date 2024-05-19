function footballLeague(input) {
  let aSector = 0
  let bSector = 0
  let vSector = 0
  let gSector = 0

  const stadiumCapacity = parseInt(input[0])
  const fanNum = parseInt(input[1])

  for (let i = 2; i <= fanNum + 1; i++) {
    const sectorInput = input[i]
    switch (sectorInput) {
      case "A":
        aSector++
        break
      case "B":
        bSector++
        break
      case "V":
        vSector++
        break
      case "G":
        gSector++
        break
    }
  }

  const sectorATotal = (aSector / fanNum) * 100
  const sectorBTotal = (bSector / fanNum) * 100
  const sectorVTotal = (vSector / fanNum) * 100
  const sectorGTotal = (gSector / fanNum) * 100

  const totalFanPercent = (fanNum / stadiumCapacity) * 100

  console.log(sectorATotal.toFixed(2) + "%")
  console.log(sectorBTotal.toFixed(2) + "%")
  console.log(sectorVTotal.toFixed(2) + "%")
  console.log(sectorGTotal.toFixed(2) + "%")
  console.log(totalFanPercent.toFixed(2) + "%")
}

footballLeague([
  "93",
  "16",
  "A",
  "V",
  "G",
  "G",
  "B",
  "B",
  "G",
  "B",
  "A",
  "B",
  "B",
  "B",
  "A",
  "B",
  "B",
  "A",
])
