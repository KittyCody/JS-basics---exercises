// function sumNumbers(input) {
//   const targetNum = Number(input[0])
//   let sum = 0
//   let index = 1
//   let number = Number(input[index])
//   index++

//   while (sum < targetNum) {
//     sum += number
//     number = Number(input[index])
//     index++
//   }
//   console.log(sum)
// }

function sumNumbers(input) {
  const targetNum = Number(input[0])
  let sum = 0
  let index = 1

  while (sum < targetNum) {
    sum += Number(input[index])
    index++
  }
  console.log(sum)
}

sumNumbers(["100", "10", "20", "30", "10"])
