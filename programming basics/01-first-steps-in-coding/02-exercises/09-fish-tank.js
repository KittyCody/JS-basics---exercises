function WaterQuantity(input) {
  const length = parseFloat(input[0]);
  const width = parseFloat(input[1]);
  const height = parseFloat(input[2]);
  const percent = parseFloat(input[3]);
  const tankVolume = length * width * height;
  const volumeInLitres = tankVolume * 0.001;
  const placeOccupied = percent / 100;
  const litresNeeded = volumeInLitres * (1 - placeOccupied);
  console.log(litresNeeded);
}

WaterQuantity(["85", "75", "47", "17"]);
