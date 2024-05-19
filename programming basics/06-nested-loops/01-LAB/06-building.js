function building(input) {
  const floorsNum = parseInt(input.shift())
  const roomsPerFloor = parseInt(input.shift())

  for (let currentFloor = floorsNum; currentFloor >= 1; currentFloor--) {
    let outputLine = ""

    for (let currentRoom = 0; currentRoom < roomsPerFloor; currentRoom++) {
      if (currentFloor === floorsNum) {
        outputLine += `L${currentFloor}${currentRoom} `
      } else if (currentFloor % 2 === 0) {
        outputLine += `O${currentFloor}${currentRoom} `
      } else {
        outputLine += `A${currentFloor}${currentRoom} `
      }
    }
    console.log(outputLine)
  }
}

building(["6", "4"])
