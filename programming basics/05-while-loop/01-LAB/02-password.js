function passwordCheck(input) {
  const username = input[0]
  const password = input[1]

  let index = 2
  let passwordGuess = input[index]

  while (passwordGuess !== password && index < input.length - 1) {
    console.log("Invalid password! Try again!")
    index++
    passwordGuess = input[index]
  }

  if (passwordGuess === password) {
    console.log(`Welcome ${username}!`)
  } else {
    console.log("No more password guesses. Access denied!")
  }
}

passwordCheck(["Nakov", "1234", "Pass", "1324", "1234"])

// // const prix = 30
// // for(let i = 0; i <= prix; i+=2) {

// // }

// for (;i < prix ;){

// }

// while (i < prix)

// let prix = 30
// let index = 0

// while(index <= prix) {

//     console.log();

// function passwordCheck(input) {
//   const name = input[0]
//   const password = input[1]

//   let index = 2
//   let passwordGuess = input[index]
//   index++

//   while (passwordGuess !== password) {
//     passwordGuess = input[index]
//     index++
//   }
//   console.log(`Welcome ${name}!`)
// }
