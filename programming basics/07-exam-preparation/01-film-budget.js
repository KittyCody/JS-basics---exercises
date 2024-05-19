function filmBudget(input) {
  const movieName = input[0]
  const dayNum = parseInt(input[1])
  const ticketsNum = parseInt(input[2])
  const ticketPrice = parseFloat(input[3])
  const cinemaPercent = parseInt(input[4])

  const moneyPerDay = ticketsNum * ticketPrice
  const moneyTotalDays = dayNum * moneyPerDay
  const percentApplied = (moneyTotalDays * cinemaPercent) / 100

  const total = moneyTotalDays - percentApplied

  console.log(
    `The profit from the movie ${movieName} is ${total.toFixed(2)} lv.`
  )
}

filmBudget(["Python Basics", 40, 34785, 10.45, 14])
