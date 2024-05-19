function schoolCamp(input) {
  const season = input[0]
  const groupType = input[1]
  const studentsNum = parseInt(input[2])
  const nightsNum = parseInt(input[3])

  let sport
  let price

  switch (groupType) {
    case "girls":
    case "boys":
      if (season === "Winter") price = nightsNum * studentsNum * 9.6
      else if (season === "Spring") price = nightsNum * studentsNum * 7.2
      else {
        price = nightsNum * studentsNum * 15
      }
      break
    case "mixed":
      if (season === "Winter") {
        price = studentsNum * nightsNum * 10
      } else if (season === "Spring") price = studentsNum * nightsNum * 9.5
      else {
        price = nightsNum * studentsNum * 20
      }
      break
  }

  if (studentsNum >= 50) price -= price * 0.5
  else if (studentsNum >= 20 && studentsNum < 50) price -= price * 0.15
  else if (studentsNum >= 10 && studentsNum < 20) price -= price * 0.05

  switch (groupType) {
    case "girls":
      if (season === "Winter") {
        sport = "Gymnastics"
      } else if (season === "Spring") {
        sport = "Athletics"
      } else {
        sport = "Volleyball"
      }
      break
    case "boys":
      if (season === "Winter") {
        sport = "Judo"
      } else if (season === "Spring") {
        sport = "Tennis"
      } else {
        sport = "Football"
      }
      break
    case "mixed":
      if (season === "Winter") {
        sport = "Ski"
      } else if (season === "Spring") {
        sport = "Cycling"
      } else {
        sport = "Swimming"
      }
      break
  }

  console.log(`${sport} ${price.toFixed(2)} lv.`)
}

schoolCamp(["Spring", "mixed", "17", "14"])
