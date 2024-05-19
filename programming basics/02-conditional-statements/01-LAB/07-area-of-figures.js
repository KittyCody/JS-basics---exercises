function calculateArea(shape, ...args) {
  switch (shape) {
    case "square":
      return (args[0] * args[0]).toFixed(3)
    case "rectangle":
      return (args[0] * args[1]).toFixed(3)
    case "circle":
      return (Math.PI * args[0] * args[0]).toFixed(3)
    case "triangle":
      return ((args[0] * args[1]) / 2).toFixed(3)
    default:
      return "Invalid shape!"
  }
}

calculateArea(["square", "5"])
