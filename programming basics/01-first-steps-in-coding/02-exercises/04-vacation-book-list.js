function howManyHoursPeeDay(input) {
  let numOfPages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let howManyDays = Number(input[2]);
  const hoursPerDay = numOfPages / pagesPerHour / howManyDays;

  console.log(hoursPerDay);
}

howManyHoursPeeDay(["200", "3", "4"]);
