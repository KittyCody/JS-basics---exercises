function onTimeForTheExam(input) {
  const hourOfTheExam = parseInt(input[0])
  const minuteOfTheExam = parseInt(input[1])
  const hourOfArrival = parseInt(input[2])
  const minuteOfArrival = parseInt(input[3])

  const timeOfArrival = new Date()
  timeOfArrival.setHours(hourOfArrival)
  timeOfArrival.setMinutes(minuteOfArrival)

  const timeOfTheExam = new Date()
  timeOfTheExam.setHours(hourOfTheExam)
  timeOfTheExam.setMinutes(minuteOfTheExam)

  //   console.log(`${timeOfTheExam.getHours()}:${timeOfTheExam.getMinutes()}`)
  // }
}

onTimeForTheExam(["9", "30", "9", "50"])
