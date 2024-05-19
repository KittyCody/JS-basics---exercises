function trainTheTrainers(input) {
  const juryNum = parseInt(input.shift())
  let presentationName = input.shift()

  while (presentationName !== "Finish") {
    let totalScore = 0

    for (let i = 0; i < juryNum; i++) {
      const score = parseFloat(input.shift())
      totalScore += score
    }

    const averageScore = totalScore / juryNum
    console.log(`${presentationName} - ${averageScore.toFixed(2)}.`)

    presentationName = input.shift()
  }

  let totalAverage = 0
  let presentationsCount = 0

  for (let i = 0; i < input.length; i++) {
    if (isNaN(parseFloat(input[i]))) {
      presentationsCount++
      totalAverage += parseFloat(input[i + 1])
    }
  }

  if (presentationsCount > 0) {
    totalAverage = totalScore / presentationsCount
  }

  console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`)
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
])
