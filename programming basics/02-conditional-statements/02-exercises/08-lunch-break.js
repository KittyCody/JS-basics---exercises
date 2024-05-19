function movieBreak(input) {
  const movieName = "" + input[0]
  const movieLength = parseInt(input[1])
  const breakDuration = parseInt(input[2])
  const lunchTime = breakDuration / 8
  const breakTime = breakDuration / 4
  const totalTimeNeeded = lunchTime + breakTime + movieLength

  if (totalTimeNeeded <= breakDuration) {
    const remainingTime = breakDuration - totalTimeNeeded
    console.log(
      `You have enough time to watch ${movieName} and left with ${Math.ceil(
        remainingTime
      )} minutes free time.`
    )
  } else {
    const extraTime = totalTimeNeeded - breakDuration
    console.log(
      `You don't have enough time to watch ${movieName}, you need ${Math.ceil(
        extraTime
      )} more minutes.`
    )
  }
}
movieBreak(["Game of Thrones", "60", "96"])

function lunchBreak(input) {
  const serialName = input[0]
  const seriesDuration = parseInt(input[1])
  const relaxationDuration = parseInt(input[2])

  const lunchDuration = relaxationDuration * (1 / 8)
  const freeTime = relaxationDuration * (1 / 4)
  const restTime = relaxationDuration - lunchDuration - freeTime
  const restAfterSerie = Math.ceil(seriesDuration - restTime)

  if (seriesDuration <= restTime) {
    console.log(
      `You have enough time to watch ${serialName} and left with ${restAfterSerie} minutes free time.`
    )
  } else {
    console.log(
      `You don't have enough time to watch ${serialName}, you need ${restAfterSerie} more minutes.`
    )
  }
}
lunchBreak(["The Game of Thrones", "60", "96"])
lunchBreak(["Teen Wolf", "48", "60"])
