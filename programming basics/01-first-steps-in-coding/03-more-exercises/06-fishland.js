function FishBill(input) {
  const priceSkumriaPerKg = parseFloat(input[0]);
  const priceCacaPerKg = parseFloat(input[1]);
  const kgPalamud = parseFloat(input[2]);
  const kgSafrid = parseFloat(input[3]);
  const kgMidi = parseInt(input[4]);

  // Calculating prices for each type of fish
  const pricePalamudPerKg = priceSkumriaPerKg + priceSkumriaPerKg * 0.6;
  const priceSafridPerKg = priceCacaPerKg + priceCacaPerKg * 0.8;
  const priceMidi = 7.5;

  // Calculating the bill
  const totalPricePalamud = kgPalamud * pricePalamudPerKg;
  const totalPriceSafrid = kgSafrid * priceSafridPerKg;
  const totalPriceMidi = kgMidi * priceMidi;

  const totalBill = totalPricePalamud + totalPriceSafrid + totalPriceMidi;
  console.log(totalBill.toFixed(2));
}

FishBill(["5.55", "3.57", "4.3", "3.6", "7"]);
