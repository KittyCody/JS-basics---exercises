function weatherCast(input) {
  const message = input[0].toLowerCase();
  if (message === "sunny") {
    console.log("It's warm outside!");
  } else {
    console.log("It's cold outside!");
  }
}

weatherCast(["sunny"]);
