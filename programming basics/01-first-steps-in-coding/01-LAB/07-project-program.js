function programCalculate(input) {
  const nameArchitect = input[0];
  const projectNumber = Number(input[1]);
  const hoursNeeded = projectNumber * 3;
  console.log(
    `The architect ${nameArchitect} will need ${hoursNeeded} hours to complete ${projectNumber} project/s.`
  );
}

programCalculate(["George", "4", "3"]);
