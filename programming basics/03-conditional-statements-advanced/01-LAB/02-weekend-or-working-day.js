function weekendOrWorkingDay(input) {
  const typeOfDay = input[0]

  switch (typeOfDay) {
    case "Monday":
      console.log("Working day")
      break
    case "Tuesday":
      console.log("Working day")
      break
    case "Wednesday":
      console.log("Working day")
      break
    case "Thursday":
      console.log("Working day")
      break
    case "Friday":
      console.log("Working day")
      break
    case "Saturday":
      console.log("Weekend")
      break
    case "Sunday":
      console.log("Weekend")
      break
    default:
      console.log("Error")
      break
  }
}

weekendOrWorkingDay(["Wednesday"])
