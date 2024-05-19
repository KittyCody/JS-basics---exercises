function sumOfVowels(input) {
  const text = input[0]
  let sum = 0
  for (let i = 0; i < text.length; i++) {
    let ch = text.charAt(i)
    switch (ch) {
      case "a":
        sum += 1
        break
      case "e":
        sum += 2
        break
      case "i":
        sum += 3
        break
      case "o":
        sum += 4
        break
      case "u":
        sum += 5
        break
    }
  }
  console.log(sum)
}

// Exemple d'utilisation :
sumOfVowels(["hello"]) // Sortie attendue: 6
sumOfVowels(["hi"]) // Sortie attendue: 3
sumOfVowels(["bamboo"]) // Sortie attendue: 9
sumOfVowels(["beer"]) // Sortie attendue: 4
