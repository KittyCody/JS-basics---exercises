function weatherForecast(temperature) {
  if (temperature >= 26 && temperature <= 35) {
    console.log("Hot")
  } else if (temperature >= 20.1 && temperature <= 25.9) {
    console.log("Warm")
  } else if (temperature >= 15 && temperature <= 20) {
    console.log("Mild")
  } else if (temperature >= 12 && temperature <= 14.9) {
    console.log("Cool")
  } else if (temperature >= 5 && temperature <= 11.9) {
    console.log("Cold")
  } else {
    console.log("unknown")
  }
}

weatherForecast(["8"])
