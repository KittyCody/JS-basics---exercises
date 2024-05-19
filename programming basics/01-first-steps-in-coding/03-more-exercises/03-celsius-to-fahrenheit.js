function convertor(input) {
  const temptC = parseFloat(input[0]);
  const convertedToF = (temptC * 9) / 5 + 32;
  console.log(convertedToF.toFixed(2));
}

convertor(["25"]);
