function hotelCost(input) {
  const dayOfStay = parseInt(input[0])
  const typeOfAccommodation = input[1]
  const review = input[2]

  const nightOfStay = dayOfStay - 1

  let roomOnePersonCost
  let apartmentCost = nightOfStay * 25
  let presidentApartmentCost = nightOfStay * 35
  const shortStay = dayOfStay <= 10
  const mildStay = dayOfStay >= 10 && dayOfStay <= 15
  const longStay = dayOfStay > 15

  switch (typeOfAccommodation) {
    case "apartment":
      if (shortStay) {
        apartmentCost -= apartmentCost * 0.3
      } else if (mildStay) {
        apartmentCost -= apartmentCost * 0.35
      } else if (longStay) {
        apartmentCost -= apartmentCost * 0.5
      }

      if (review === "positive") {
        apartmentCost += apartmentCost * 0.25
      } else {
        apartmentCost -= apartmentCost * 0.1
      }

      console.log(apartmentCost.toFixed(2))
      break

    case "president apartment":
      if (shortStay) {
        presidentApartmentCost -= presidentApartmentCost * 0.1
      } else if (mildStay) {
        presidentApartmentCost -= presidentApartmentCost * 0.15
      } else if (longStay) {
        presidentApartmentCost -= presidentApartmentCost * 0.2
      }

      if (review === "positive") {
        presidentApartmentCost += presidentApartmentCost * 0.25
      } else {
        presidentApartmentCost -= presidentApartmentCost * 0.1
      }
      console.log(presidentApartmentCost.toFixed(2))
      break
    case "room for one person":
      roomOnePersonCost = nightOfStay * 18
      if (review === "positive") {
        roomOnePersonCost += roomOnePersonCost * 0.25
      } else {
        roomOnePersonCost -= roomOnePersonCost * 0.1
      }
      console.log(roomOnePersonCost.toFixed(2))
  }
}

hotelCost(["2", "apartment", "positive"])
