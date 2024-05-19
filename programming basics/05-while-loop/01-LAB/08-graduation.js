function graduation(input) {
  const studentName = input[0]

  let gradeSum = 0
  let year = 1

  let index = 1
  let grade = Number(input[index++])
  let failCount = 0
  let averageGrade = 0

  while (year <= 12) {
    gradeSum += grade

    if (grade < 4) {
      failCount++

      if (failCount > 1) {
        console.log(`${studentName} has been excluded at ${year} grade`)
        return
      }
    } else {
      year++
    }
    grade = Number(input[index++])
  }
  averageGrade = gradeSum / 12
  console.log(
    `${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`
  )
}

graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
])
