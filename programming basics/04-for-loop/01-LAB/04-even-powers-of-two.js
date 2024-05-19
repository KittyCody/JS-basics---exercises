function printEvenPowersOf2(input) {
  const n = Number(input[0])

  for (let i = 0; i <= n; i += 2) {
    let result = Math.pow(2, i)
    console.log(result)
  }
}

printEvenPowersOf2(["7"]) // Résultat: 1, 4
