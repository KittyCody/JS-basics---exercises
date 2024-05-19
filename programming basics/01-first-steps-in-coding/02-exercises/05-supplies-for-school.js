function suppliesCost(input) {
  const numPenPacks = parseFloat(input[0]);
  const numMarkerPacks = parseFloat(input[1]);
  const detergentQuantity = parseFloat(input[2]);
  const discountPercent = parseFloat(input[3]) / 100;
  const penPacksCost = numPenPacks * 5.8;
  const markerPacksCost = numMarkerPacks * 7.2;
  const detergentCost = detergentQuantity * 1.2;
  const suppliesTotalCost = penPacksCost + markerPacksCost + detergentCost;
  const priceWithDiscount =
    suppliesTotalCost - suppliesTotalCost * discountPercent;
  console.log(priceWithDiscount);
}

suppliesCost(["4", "2", "5", "13"]);
