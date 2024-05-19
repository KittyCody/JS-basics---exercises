function profitHarvest(input) {
  const vegetablesPricePerKilo = parseFloat(input[0]);
  const fruitsPricePerKilo = parseFloat(input[1]);
  const vegetablesInTotal = parseFloat(input[2]);
  const fruitsInTotal = parseFloat(input[3]);

  const finalPrice =
    vegetablesInTotal * vegetablesPricePerKilo +
    fruitsInTotal * fruitsPricePerKilo;
  const priceInEuro = finalPrice / 1.94;
  console.log(priceInEuro.toFixed(2));
}
profitHarvest(["0.194", "19.4", "10", "10"]);
