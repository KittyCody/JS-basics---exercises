function clock2() {
  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
      for (let second = 0; second <= 59; second++) {
        console.log(`${hour} : ${minute} : ${second}`)
      }
    }
  }
}

clock2()
