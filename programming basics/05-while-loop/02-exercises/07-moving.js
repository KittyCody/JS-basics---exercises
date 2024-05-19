function moving(input) {
  const width = parseInt(input[0])
  const length = parseInt(input[1])
  const height = parseInt(input[2])

  let volume = width * length * height

  for (let i = 3; i < input.length; i++) {
    if (input[i] === "Done") {
      break
    }

    let cubics = Number(input[i])
    volume -= cubics
    if (volume <= 0) {
      break
    }
  }

  if (volume >= 0) {
    console.log(`${volume} Cubic meters left.`)
  } else {
    console.log(
      `No more free space! You need ${Math.abs(volume)} Cubic meters more.`
    )
  }
}

moving(["10", "1", "2", "4", "6", "Done"])
