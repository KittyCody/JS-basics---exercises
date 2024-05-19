function toyShopExcursion(input) {
  const excursionPrice = parseFloat(input[0]);
  const puzzles = parseInt(input[1]);
  const dolls = parseInt(input[2]);
  const bears = parseInt(input[3]);
  const minions = parseInt(input[4]);
  const trucks = parseInt(input[5]);

  const puzzlePrice = 2.6;
  const dollPrice = 3;
  const bearPrice = 4.1;
  const minionPrice = 8.2;
  const truckPrice = 2;

  const totalToys = puzzles + dolls + bears + minions + trucks;
  let totalPrice =
    puzzles * puzzlePrice +
    dolls * dollPrice +
    bears * bearPrice +
    minions * minionPrice +
    trucks * truckPrice;

  if (totalToys >= 50) {
    totalPrice *= 0.75;
  }

  totalPrice *= 0.9;

  if (totalPrice >= excursionPrice) {
    console.log(`Yes! ${(totalPrice - excursionPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(excursionPrice - totalPrice).toFixed(2)} lv needed.`
    );
  }
}

toyShopExcursion(["40.8", "20", "25", "30", "50", "10"]);
