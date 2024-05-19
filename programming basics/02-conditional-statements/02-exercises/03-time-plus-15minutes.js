function calculateTimeAfter15Minutes(hour, minutes) {
  let totalMinutes = hour * 60 + minutes;

  totalMinutes += 15;

  const newHour = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;

  const formattedHour = newHour < 10 ? "0" + newHour : newHour;
  const formattedMinutes = newMinutes < 10 ? "0" + newMinutes : newMinutes;

  return `${formattedHour}:${formattedMinutes}`;
}

console.log(calculateTimeAfter15Minutes(10, 30));
console.log(calculateTimeAfter15Minutes(23, 45));
console.log(calculateTimeAfter15Minutes(12, 59));
