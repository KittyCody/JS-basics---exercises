function costRepair(input) {
  const nylonQuantity = parseFloat(input[0])
  const paintQuantity = parseFloat(input[1])
  const thinnerQuantity = parseFloat(input[2])
  const hoursNeeded = parseFloat(input[3])

  const nylonPrice = (nylonQuantity + 2) * 1.5
  const paintPrice = (paintQuantity + paintQuantity * 0.1) * 14.5
  const thinnerCost = thinnerQuantity * 5.0
  const bagCost = 0.4
  const totalCostSupplies = nylonPrice + paintPrice + thinnerCost + bagCost
  const workersCost = totalCostSupplies * 0.3 * hoursNeeded
  console.log(totalCostSupplies + workersCost)
}

costRepair(["10", "11", "4", "8"])
