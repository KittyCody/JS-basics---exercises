function combinationsCount(oneLev, twoLev, fiveLev, sum) {
  let count = 0

  for (let one = 0; one <= oneLev; one++) {
    for (let two = 0; two <= twoLev; two++) {
      for (let five = 0; five <= fiveLev; five++) {
        if (one + 2 * two + 5 * five === sum) {
          console.log(
            `${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${sum} lv.`
          )
          count++
        }
      }
    }
  }

  if (count === 0) {
    console.log(`No valid combinations.`)
  }
}

combinationsCount(5, 3, 1, 7)
