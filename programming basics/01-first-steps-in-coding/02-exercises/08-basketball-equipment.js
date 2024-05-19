function taxesPerYear(input) {
  const annuelTax = parseFloat(input[0]);
  const sneakersPrice = annuelTax - annuelTax * 0.4;
  const equipmentPrice = sneakersPrice - sneakersPrice * 0.2;
  const basketBallPrice = equipmentPrice / 4;
  const accessoriesPrice = basketBallPrice / 5;
  const totalPriceEquipment =
    annuelTax +
    sneakersPrice +
    equipmentPrice +
    basketBallPrice +
    accessoriesPrice;
  console.log(totalPriceEquipment);
}

taxesPerYear(["365"]);
