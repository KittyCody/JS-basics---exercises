function gameOfIntervals(input) {
  const numOfMoves = parseInt(input[0])

  let from0To9Count = 0
  let from10To19Count = 0
  let from20To29Count = 0
  let from30To39Count = 0
  let from40To50Count = 0
  let invalidNumbersCount = 0
  let result = 0

  for (let i = 1; i <= numOfMoves; i++) {
    let numberToCheck = parseInt(input[i])

    if (numberToCheck >= 0 && numberToCheck <= 9) {
      from0To9Count++
      result += numberToCheck * 0.2
    } else if (numberToCheck >= 10 && numberToCheck <= 19) {
      from10To19Count++
      result += numberToCheck * 0.3
    } else if (numberToCheck >= 20 && numberToCheck <= 29) {
      from20To29Count++
      result += numberToCheck * 0.4
    } else if (numberToCheck >= 30 && numberToCheck <= 39) {
      from30To39Count++
      result += 50
    } else if (numberToCheck >= 40 && numberToCheck <= 50) {
      from40To50Count++
      result += 100
    } else {
      invalidNumbersCount++
    }
  }

  if (invalidNumbersCount < 0 && invalidNumbersCount > 50) {
    result /= 2
  }

  const totalNumbersCount =
    from0To9Count +
    from10To19Count +
    from20To29Count +
    from30To39Count +
    from40To50Count +
    invalidNumbersCount
  const from0To9Percent = ((from0To9Count / totalNumbersCount) * 100).toFixed(2)
  const from10To19Percent = (
    (from10To19Count / totalNumbersCount) *
    100
  ).toFixed(2)
  const from20To29Percent = (
    (from20To29Count / totalNumbersCount) *
    100
  ).toFixed(2)
  const from30To39Percent = (
    (from30To39Count / totalNumbersCount) *
    100
  ).toFixed(2)
  const from40To50Percent = (
    (from40To50Count / totalNumbersCount) *
    100
  ).toFixed(2)
  const invalidNumbersPercent = (
    (invalidNumbersCount / totalNumbersCount) *
    100
  ).toFixed(2)

  console.log(result.toFixed(2))
  console.log(`From 0 to 9: ${from0To9Percent}%`)
  console.log(`From 10 to 19: ${from10To19Percent}%`)
  console.log(`From 20 to 29: ${from20To29Percent}%`)
  console.log(`From 30 to 39: ${from30To39Percent}%`)
  console.log(`From 40 to 50: ${from40To50Percent}%`)
  console.log(`Invalid numbers: ${invalidNumbersPercent}%`)
}

gameOfIntervals([
  "10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
])
