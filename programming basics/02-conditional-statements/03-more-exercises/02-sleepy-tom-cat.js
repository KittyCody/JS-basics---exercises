function doesTomSleepWell(input) {
  const freeDays = parseInt(input[0]);
  const workDays = 365 - freeDays;
  const timeSpentPlaying = freeDays * 127 + workDays * 63;
  const yearsPlayTime = 30000;
  if (freeDays && timeSpentPlaying > yearsPlayTime) {
    const remainingTime = timeSpentPlaying - yearsPlayTime;
    const hours = Math.floor(remainingTime / 60);
    const minutes = remainingTime % 60;
    console.log("Tom will run away");
    console.log(`${hours} hours and ${minutes} minutes more for play`);
  } else {
    const remainingTime = yearsPlayTime - timeSpentPlaying;
    const hours = Math.floor(remainingTime / 60);
    const minutes = remainingTime % 60;
    console.log("Tom sleeps well");
    console.log(`${hours} hours and ${minutes} minutes less for play`);
  }
}
doesTomSleepWell(["20"]);
