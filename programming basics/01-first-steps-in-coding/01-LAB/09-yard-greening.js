function greeningCost(input) {
  const areaToGreen = parseFloat(input[0]);
  let normalCost = areaToGreen * 7.61;
  const finalPrice = normalCost - normalCost * 0.18;
  const discount = 0.18 * normalCost;

  return `The final price is: ${finalPrice} lv.\nThe discount is: ${discount} lv.`;
}

console.log(greeningCost(["150"]));
