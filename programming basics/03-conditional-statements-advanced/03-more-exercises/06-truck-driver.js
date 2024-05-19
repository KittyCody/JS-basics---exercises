function truckDriver(input) {
  const season = input[0]
  const kmPerMonth = parseFloat(input[1])

  let salary

  if (kmPerMonth <= 5000) {
    if (season === "Spring" || season === "Autumn") {
      salary = kmPerMonth * 0.75
    } else if (season === "Summer") {
      salary = kmPerMonth * 0.9
    } else if (season === "Winter") {
      salary = kmPerMonth * 1.05
    }
  } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
    if (season === "Spring" || season === "Autumn") {
      salary = kmPerMonth * 0.95
    } else if (season === "Summer") {
      salary = kmPerMonth * 1.1
    } else if (season === "Winter") {
      salary = kmPerMonth * 1.25
    }
  } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
    salary = kmPerMonth * 1.45
  }

  const salaryAfterTaxes = salary - salary * 0.1
  const salaryForWholeSeason = salaryAfterTaxes * 4

  console.log(salaryForWholeSeason.toFixed(2))
}

truckDriver(["Spring", "16942"])
