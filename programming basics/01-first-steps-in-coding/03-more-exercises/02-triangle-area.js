function angleArea(input) {
  const a = parseFloat(input[0]);
  const h = parseFloat(input[1]);
  const areaOfTheAngle = (a * h) / 2;

  console.log(areaOfTheAngle.toFixed(2));
}

angleArea(["20", "30"]);
