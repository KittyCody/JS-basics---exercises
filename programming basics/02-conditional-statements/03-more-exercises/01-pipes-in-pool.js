function poolCondition(input) {
  const volumePool = parseInt(input[0])
  const pipeOne = parseInt(input[1])
  const pipeTwo = parseInt(input[2])
  const hoursOfAbsence = parseFloat(input[3])
  const pipeOneTotalDebit = hoursOfAbsence * pipeOne
  const pipeTwoTotalDebit = hoursOfAbsence * pipeTwo
  const pipeTotalDebit = pipeOneTotalDebit + pipeTwoTotalDebit

  if (pipeTotalDebit > volumePool) {
    const excessVolume = pipeTotalDebit - volumePool
    console.log(
      `For ${hoursOfAbsence.toFixed(
        2
      )} hours the pool overflows with ${excessVolume} liters.`
    )

    return
  }

  const currentVolume = pipeTotalDebit / volumePool
  const pipeOnePercentage = pipeOneTotalDebit / pipeTotalDebit
  const pipeTwoPercentage = pipeTwoTotalDebit / pipeTotalDebit
  console.log(
    `The pool is ${(currentVolume * 100).toFixed(2)} full. Pipe 1: ${(
      pipeOnePercentage * 100
    ).toFixed(2)}. Pipe 2: ${(pipeTwoPercentage * 100).toFixed(2)}.`
  )
}

poolCondition(["1000", "100", "120", "3"])
