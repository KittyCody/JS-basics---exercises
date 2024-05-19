function hospital(input) {
  const period = parseInt(input[0])

  let doctorsNum = 7
  let treatedPatients = 0
  let untreatedPatients = 0

  for (let day = 1; day <= period; day++) {
    let currentPatientNum = parseInt(input[day])
    if (day % 3 === 0 && untreatedPatients > treatedPatients) {
      doctorsNum++
    }

    if (currentPatientNum <= doctorsNum) {
      treatedPatients += currentPatientNum
    } else {
      treatedPatients += doctorsNum
      untreatedPatients += currentPatientNum - doctorsNum
    }
  }

  console.log(`Treated patients: ${treatedPatients}.`)
  console.log(`Untreated patients: ${untreatedPatients}.`)
}

hospital(["3", "7", "7", "7"])
