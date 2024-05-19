function calculateTotalTime(seconds1, seconds2, seconds3) {
  const timeFirst = Number(seconds1);
  const timeSecond = Number(seconds2);
  const timeThird = Number(seconds3);

  const totalTimeInSeconds = timeFirst + timeSecond + timeThird;

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

console.log(calculateTotalTime("47", "75", "85", "158"));
