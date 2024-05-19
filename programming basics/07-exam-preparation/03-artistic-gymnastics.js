function artisticGymnastic(input) {
  const country = input[0]
  const device = input[1]

  let scores = 0

  switch (device) {
    case "ribbon":
      if (country === "Russia") {
        scores = 9.1 + 9.4
      } else if (country === "Bulgaria") {
        scores = 9.6 + 9.4
      } else {
        scores = 9.2 + 9.5
      }
      break
    case "hoop":
      if (country === "Russia") {
        scores = 9.3 + 9.8
      } else if (country === "Bulgaria") {
        scores = 9.55 + 9.75
      } else {
        scores = 9.45 + 9.35
      }
      break
    case "rope":
      if (country === "Russia") {
        scores = 9.6 + 9.0
      } else if (country === "Bulgaria") {
        scores = 9.5 + 9.4
      } else {
        scores = 9.7 + 9.15
      }
      break
  }
  console.log(`The team of ${country} get ${scores.toFixed(3)} on ${device}`)

  if (scores < 20) {
    const difference = 20 - scores
    const percentNeededScores = (difference / 20) * 100
    console.log(`${percentNeededScores.toFixed(2)}%`)
  }
}

artisticGymnastic(["Bulgaria", "ribbon"])
