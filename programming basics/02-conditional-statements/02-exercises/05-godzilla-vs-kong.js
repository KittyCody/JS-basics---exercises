function filmBudget(input) {
  const filmBudget = parseFloat(input[0]);
  const numExtras = Number(input[1]);
  let priceClothingPerPerson = Number(input[2]);
  let totalClothingCost = numExtras * priceClothingPerPerson;

  if (numExtras >= 150) {
    totalClothingCost -= totalClothingCost * 0.1;
  }

  const priceDecor = filmBudget * 0.1;
  const totalCost = priceDecor + totalClothingCost;

  const difference = filmBudget - totalCost;

  if (priceDecor > filmBudget || totalClothingCost > filmBudget) {
    console.log(
      ` Not enough money!\nWingard needs ${Math.abs(difference).toFixed(
        2
      )} leva more.`
    );
  } else {
    const remainingBudget = filmBudget - totalCost;
    console.log(
      ` Action!\nWingard starts filming with ${remainingBudget.toFixed(
        2
      )} leva left.`
    );
  }
}

filmBudget(["20000", "120", "55.5"]);
