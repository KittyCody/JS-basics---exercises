function basketballEquipment(input) {
  const annuelTax = parseInt(input.shift())

  const basketsCost = annuelTax - annuelTax * 0.4
  const equipment = basketsCost - basketsCost * 0.2
  const ball = equipment / 4
  const accessories = ball / 5

  const totalCost = annuelTax + basketsCost + equipment + ball + accessories

  return totalCost.toFixed(2)
}

console.log(basketballEquipment([230]))
