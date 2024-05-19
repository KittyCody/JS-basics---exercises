function salary(input) {
  const openTabsNum = parseInt(input[0])
  let salary = parseFloat(input[1])

  for (let i = 0; i < openTabsNum; i++) {
    let media = input[i]

    switch (media) {
      case "Facebook":
        salary -= 150
        break
      case "Instagram":
        salary -= 100
        break
      case "Reddit":
        salary -= 50
        break
    }
  }

  if (salary <= 0) {
    console.log("You lost your salary")
  } else {
    console.log(salary)
  }
}

salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])
