function cinemaTickets(input) {
  let index = 0
  let command = input[index]
  index++

  let studentTicketCounter = 0
  let standardTicketCounter = 0
  let kidTicketCounter = 0

  while (command !== "Finish") {
    let name = command
    let freeSpace = Number(input[index])
    index++

    let type = input[index]
    index++

    let currentSoldTicket = 0

    while (type !== "End") {
      switch (type) {
        case "student":
          studentTicketCounter++
          break
        case "standard":
          standardTicketCounter++
          break
        case "kid":
          kidTicketCounter++
          break
      }
      currentSoldTicket++
      if (freeSpace <= currentSoldTicket) {
        break
      }
      type = input[index]
      index++
    }

    let percentage = (currentSoldTicket / freeSpace) * 100
    console.log(`${name} - ${percentage.toFixed(2)}% full.`)

    command = input[index]
    index++
  }
  let totalTickets =
    studentTicketCounter + standardTicketCounter + kidTicketCounter

  const studentsPercent = (studentTicketCounter / totalTickets) * 100
  const standardPercent = (standardTicketCounter / totalTickets) * 100
  const kidPercent = (kidTicketCounter / totalTickets) * 100

  console.log(`Total tickets: ${totalTickets}`)
  console.log(`${studentsPercent.toFixed(2)}% student tickets.`)
  console.log(`${standardPercent.toFixed(2)}% standard tickets.`)
  console.log(`${kidPercent.toFixed(2)}% kids tickets.`)
}

cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
])
