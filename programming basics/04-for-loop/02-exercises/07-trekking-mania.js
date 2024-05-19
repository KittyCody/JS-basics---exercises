function trekkingMania(input) {
  const groupNumber = parseInt(input[0])

  let Mousala = 0
  let Montblanc = 0
  let Kilimandjaro = 0
  let K2 = 0
  let Everest = 0
  let peopleInTotal = 0

  for (let i = 1; i <= groupNumber; i++) {
    let membersNum = parseInt(input[i])
    peopleInTotal += membersNum
    if (membersNum <= 5) {
      Mousala += membersNum
    } else if (membersNum <= 12) {
      Montblanc += membersNum
    } else if (membersNum <= 25) {
      Kilimandjaro += membersNum
    } else if (membersNum <= 40) {
      K2 += membersNum
    } else {
      Everest += membersNum
    }
  }

  const percentMousala = ((Mousala / peopleInTotal) * 100).toFixed(2)
  const percentMontblanc = ((Montblanc / peopleInTotal) * 100).toFixed(2)
  const percentKilimandjaro = ((Kilimandjaro / peopleInTotal) * 100).toFixed(2)
  const percentK2 = ((K2 / peopleInTotal) * 100).toFixed(2)
  const percentEverest = ((Everest / peopleInTotal) * 100).toFixed(2)

  console.log(`${percentMousala}%`)
  console.log(`${percentMontblanc}%`)
  console.log(`${percentKilimandjaro}%`)
  console.log(`${percentK2}%`)
  console.log(`${percentEverest}%`)
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
