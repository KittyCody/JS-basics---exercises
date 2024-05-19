function worldSwimmingRecord(input) {
  let worldRecordInSeconds = parseFloat(input[0]);
  let distanceInMetresToSwim = parseFloat(input[1]);
  let timeNeededInSeconds = parseFloat(input[2]);
  timeNeededInSeconds = distanceInMetresToSwim * timeNeededInSeconds;
  let waterResistanceImpact = distanceInMetresToSwim / 15;
  waterResistanceImpact = Math.floor(waterResistanceImpact) * 12.5;

  const timeInTotal = timeNeededInSeconds + waterResistanceImpact;
  if (timeInTotal < worldRecordInSeconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${timeInTotal.toFixed(
        2
      )} seconds.`
    );
  } else if (timeInTotal >= worldRecordInSeconds) {
    const differenceInTime = timeInTotal - worldRecordInSeconds;
    console.log(
      `No, he failed! He was ${differenceInTime.toFixed(2)} seconds slower.`
    );
  }
}

worldSwimmingRecord(["10464", "1500", "20"]);
