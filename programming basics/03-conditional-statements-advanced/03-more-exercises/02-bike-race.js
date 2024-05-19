function bikeRaceDonation(input) {
  const numJuniorBikers = parseInt(input[0])
  const numSeniorBikers = parseInt(input[1])
  const typeOfLayout = input[2]

  const totalParticipants = numJuniorBikers + numSeniorBikers

  let juniorsDonationSome
  let seniorDonationSome

  switch (typeOfLayout) {
    case "trail":
      juniorsDonationSome = numJuniorBikers * 5.5
      seniorDonationSome = numSeniorBikers * 7
      break
    case "cross-country":
      juniorsDonationSome = numJuniorBikers * 8
      seniorDonationSome = numSeniorBikers * 9.5
      if (totalParticipants >= 50) {
        const discount = 0.25 * (juniorsDonationSome + seniorDonationSome)
        juniorsDonationSome -= discount / 2
        seniorDonationSome -= discount / 2
      }
      break
    case "downhill":
      juniorsDonationSome = numJuniorBikers * 12.25
      seniorDonationSome = numSeniorBikers * 13.75
      break
    case "road":
      juniorsDonationSome = numJuniorBikers * 20
      seniorDonationSome = numSeniorBikers * 21.5
      break
  }

  let donationSomeInTotal = juniorsDonationSome + seniorDonationSome
  const taxes = donationSomeInTotal * 0.05
  donationSomeInTotal -= taxes

  console.log(donationSomeInTotal.toFixed(2))
}

bikeRaceDonation([3, 40, "road"])
