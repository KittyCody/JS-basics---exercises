function calculateWorkplaces(w, h) {
  const corridorWidth = 100
  const deskWidth = 70
  const deskDepth = 120
  const doorWidth = 160
  const podiumWidth = 160
  const podiumDepth = 120

  const availableWidth = w * 100 - corridorWidth
  const desksPerRow = Math.floor(availableWidth / deskWidth)

  const availableDepth = h * 100
  const rows = Math.floor(availableDepth / deskDepth)

  const totalWorkplaces = desksPerRow * rows - 3

  return totalWorkplaces
}

const w = 15
const h = 8.9

const workplaces = calculateWorkplaces(w, h)
console.log(workplaces)
