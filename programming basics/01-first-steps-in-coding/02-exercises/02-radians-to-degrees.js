function convertorRadianToDegree(input) {
  const radians = Number(input[0]);
  let degrees = (radians * 180) / Math.PI;
  console.log(degrees);
}

convertorRadianToDegree(["4"]);
