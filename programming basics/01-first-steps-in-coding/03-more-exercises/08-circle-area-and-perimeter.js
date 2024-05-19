function calculateCircleProperties(radius) {
  const area = Math.PI * radius * radius;
  const perimeter = 2 * Math.PI * radius;
  return [area, perimeter];
}

function printCircleProperties(area, perimeter) {
  console.log(`${area.toFixed(2)}\n${perimeter.toFixed(2)}`);
}

function getCircleInputAndPrintProperties(input) {
  const radius = parseFloat(input[0]);
  const [area, perimeter] = calculateCircleProperties(radius);
  console.log(area, perimeter);
}

getCircleInputAndPrintProperties(["3"]);
