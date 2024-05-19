function GroupFoodCost(input) {
  const numChickenMenus = parseFloat(input[0]);
  const numFishMenus = parseFloat(input[1]);
  const numVegetarianMenus = parseFloat(input[2]);
  const priceChickenMenus = numChickenMenus * 10.35;
  const priceFishMenus = numFishMenus * 12.4;
  const priceVegetarianMenus = numVegetarianMenus * 8.15;
  const totalPriceMenus =
    priceChickenMenus + priceFishMenus + priceVegetarianMenus;
  const priceDessert = totalPriceMenus * 0.2;
  const priceDelivery = 2.5;
  const finalPriceOrder = totalPriceMenus + priceDessert + priceDelivery;
  console.log(finalPriceOrder);
}

GroupFoodCost(["2", "4", "3"]);
