function grades(input) {
  const studentsNum = parseInt(input[0])

  let topStudents = 0
  let goodStudents = 0
  let weakStudents = 0
  let failedStudents = 0
  let totalGrades = 0

  for (let i = 1; i <= studentsNum; i++) {
    const grade = parseFloat(input[i])
    totalGrades += grade
    if (grade >= 2.0 && grade <= 2.99) {
      failedStudents++
    } else if (grade <= 3.99) {
      weakStudents++
    } else if (grade <= 4.99) {
      goodStudents++
    } else {
      topStudents++
    }
  }

  const totalStudentsGrades = studentsNum
  const average = totalGrades / studentsNum

  const failedStudentsPercent =
    ((failedStudents / totalStudentsGrades) * 100).toFixed(2) + "%"
  const weakStudentsPercent =
    ((weakStudents / totalStudentsGrades) * 100).toFixed(2) + "%"
  const goodStudentsPercent =
    ((goodStudents / totalStudentsGrades) * 100).toFixed(2) + "%"
  const topStudentsPercent =
    ((topStudents / totalStudentsGrades) * 100).toFixed(2) + "%"

  console.log("Top students:", topStudentsPercent)
  console.log("Between 4.00 and 4.99:", goodStudentsPercent)
  console.log("Between 3.00 and 3.99:", weakStudentsPercent)
  console.log("Fail:", failedStudentsPercent)

  console.log("Average:", average.toFixed(2))
}

grades(["6", "2", "3", "4", "5", "6", "2.2"])
// function weather(input) {
//   const sunny = true
//   const snowy = false
//   const cloudy = false

//   if (sunny) {
//     console.log("Its warm outside")
//   } else {
//     console.log("it's cold outside")
//   }
// }
