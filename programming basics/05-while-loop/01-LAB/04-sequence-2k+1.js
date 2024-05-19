function sequence(input) {
  const userNum = Number(input[0])

  let index = 1

  while (index <= userNum) {
    console.log(index)
    index = index * 2 + 1
  }
}

sequence(["17"])
