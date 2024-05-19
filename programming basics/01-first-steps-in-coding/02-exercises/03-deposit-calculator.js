function depositCalculator(input) {
  let depositSome = parseFloat(input[0]);
  const depositDeadline = parseFloat(input[1]);
  const annualInterestRate = parseFloat(input[2]) / 100;
  const interestSoFar = depositSome * annualInterestRate;
  //   console.log(interestSoFar);
  const interestPerMonth = interestSoFar / 12;
  //   console.log(interestPerMonth);
  const totalSome = depositSome + depositDeadline * interestPerMonth;
  console.log(totalSome);
}

depositCalculator(["200", "3", "5.7"]);
