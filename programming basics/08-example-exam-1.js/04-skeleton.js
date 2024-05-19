function skeleton(input) {
  const minutes = parseInt(input.shift())
  const seconds = parseInt(input.shift())
  const meters = parseFloat(input.shift())
  const secondsPer100m = parseInt(input.shift())

  const controlTimeInSeconds = minutes * 60 + seconds

  const initialTime = (meters / 100) * secondsPer100m

  const reductionFactor = Math.floor(meters / 120)
  const totalReduction = reductionFactor * 2.5

  const marinTime = initialTime - totalReduction

  if (marinTime <= controlTimeInSeconds) {
    console.log(`Marin Bangiev won an Olympic quota!`)
    console.log(`His time is ${marinTime.toFixed(3)}.`)
  } else {
    const timeDifference = marinTime - controlTimeInSeconds
    console.log(
      `No, Marin failed! He was ${timeDifference.toFixed(3)} second slower.`
    )
  }
}

skeleton(["2", "12", "1200", "10"])
skeleton(["1", "20", "1546", "12"])
