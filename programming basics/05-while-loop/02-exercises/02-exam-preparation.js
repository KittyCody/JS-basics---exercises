function examPreparation(input) {
  const lowNotesLimit = input[0]
  let index = 1

  let studentNote = Number(input[index])
  let lowNotesCount = 0

  let task
  let numTask = 0

  let averageScore = 0
  let numOfProblems = 0
  let lastProblem
  let gradeSum = 0

  while (input[index] !== "Enough" && lowNotesCount < lowNotesLimit) {
    task = input[index]
    numTask++

    if (studentNote <= 4) {
      lowNotesCount++
    }

    index++
    studentNote = Number(input[index])
    gradeSum += studentNote
    index++
  }

  averageScore = gradeSum / numTask
  numOfProblems = numTask
  lastProblem = task

  if (lowNotesCount >= lowNotesLimit) {
    console.log(`You need a break, ${lowNotesLimit} poor grades.`)
  } else {
    console.log(`Average score: ${averageScore.toFixed(2)}`)
    console.log(`Number of problems: ${numOfProblems}`)
    console.log(`Last problem: ${lastProblem}`)
  }
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])
