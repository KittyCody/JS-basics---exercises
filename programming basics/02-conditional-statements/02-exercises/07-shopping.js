function shopping(input) {
  const budget = parseFloat(input[0]);
  const numVideoCards = parseInt(input[1]);
  const numProcessors = parseInt(input[2]);
  const numRam = parseInt(input[3]);

  const videoCardPrice = numVideoCards * 250;
  const processorPrice = numProcessors * (videoCardPrice * 0.35);
  const ramPrice = numRam * (videoCardPrice * 0.1);
  let totalPrice = videoCardPrice + processorPrice + ramPrice;

  if (numVideoCards > numProcessors) {
    totalPrice *= 0.85;
  }

  if (totalPrice <= budget) {
    const remainingBudget = budget - totalPrice;
    console.log(`You have ${remainingBudget.toFixed(2)} leva left!`);
  } else {
    const neededMoney = totalPrice - budget;
    console.log(
      `Not enough money! You need ${neededMoney.toFixed(2)} leva more!`
    );
  }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
