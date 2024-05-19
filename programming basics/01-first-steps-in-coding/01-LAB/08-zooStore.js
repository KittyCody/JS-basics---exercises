function foodCost(input) {
  const dogsFoodPacks = parseInt(input[0]);
  const catsFoodPacks = parseInt(input[1]);
  const dogsFoodCost = dogsFoodPacks * 2.5;
  const catsFoodCost = catsFoodPacks * 4;
  const totalFoodCost = dogsFoodCost + catsFoodCost;
  console.log(`${totalFoodCost} lv.`);
}

foodCost(["5", "4"]);
