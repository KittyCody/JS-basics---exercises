function pointOnRectangleBorder(input) {
  const x1 = parseFloat(input[0])
  const y1 = parseFloat(input[1])
  const x2 = parseFloat(input[2])
  const y2 = parseFloat(input[3])
  const x = parseFloat(input[4])
  const y = parseFloat(input[5])

  if ((x == x1 || x == x2) && y >= y1 && y <= y2) {
    console.log("Border")
  } else if ((y == y1 || y == y2) && x >= x1 && x <= x2) {
    console.log("Border")
  } else {
    console.log("Inside / Outside")
  }
}

pointOnRectangleBorder([2, -3, 12, 3, 8, -1])
pointOnRectangleBorder([2, -3, 12, 3, 12, -1])
