function walking(input) {
  const targetSteps = 10000
  let totalSteps = 0

  for (let i = 0; i < input.length; i++) {
    const currentSteps = input[i]

    if (currentSteps === "Going home") {
      const stepsBack = Number(input[i + 1])
      totalSteps += stepsBack
      break
    }
    totalSteps += Number(currentSteps)
  }

  if (totalSteps >= targetSteps) {
    const difference = totalSteps - targetSteps
    console.log(`Goal reached! Good job!\n${difference} steps over the goal!`)
  } else {
    const difference = targetSteps - totalSteps
    console.log(`${difference} more steps to reach goal.`)
  }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
