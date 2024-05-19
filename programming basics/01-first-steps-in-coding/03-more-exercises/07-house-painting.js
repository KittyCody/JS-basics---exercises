function PaintLitresNeeded(input) {
  const x = parseFloat(input[0]);
  const y = parseFloat(input[1]);
  const h = parseFloat(input[2]);

  const sideWall = x * y;
  const windowSize = 1.5 * 1.5;
  const twoSideWalls = sideWall * 2 - 2 * windowSize;
  const backWall = x * x;
  const enter = 1.2 * 2;
  const backAndFrontWall = 2 * backWall - enter;
  const totalArea = twoSideWalls + backAndFrontWall;
  const greenPaint = totalArea / 3.4;
  const twoRectangleRoof = 2 * (x * y);
  const twoTriangles = 2 * ((x * h) / 2);
  const totalRoofArea = twoRectangleRoof + twoTriangles;
  const redPaint = totalRoofArea / 4.3;
  console.log(greenPaint.toFixed(2) + "\n" + redPaint.toFixed(2));
}

PaintLitresNeeded(["10.25", "15.45", "8.88"]);
