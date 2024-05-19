function workingHours(input) {
  const hourOfTheDay = parseInt(input[0])
  const dayOfTheWeek = input[1]

  switch (dayOfTheWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
      switch (hourOfTheDay) {
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          console.log("open")
          break
        default:
          console.log("closed")
          break
      }
      break
    default:
      console.log("closed")
      break
  }
}
workingHours(["13", "Monday"])
