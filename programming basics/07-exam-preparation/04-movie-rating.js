function movieRating(input) {
  const movieNum = parseInt(input[0])
  let highestRating = -Infinity
  let lowestRating = Infinity
  let highestRatedMovie = ""
  let lowestRatedMovie = ""
  let totalRating = 0

  for (let i = 1; i < input.length; i += 2) {
    const movieName = input[i]
    const movieRating = parseFloat(input[i + 1])

    if (movieRating > highestRating) {
      highestRating = movieRating
      highestRatedMovie = movieName
    }

    if (movieRating < lowestRating) {
      lowestRating = movieRating
      lowestRatedMovie = movieName
    }

    totalRating += movieRating
  }

  const averageRating = totalRating / movieNum

  console.log(
    `${highestRatedMovie} is with highest rating: ${highestRating.toFixed(1)}`
  )
  console.log(
    `${lowestRatedMovie} is with lowest rating: ${lowestRating.toFixed(1)}`
  )
  console.log(`Average rating: ${averageRating.toFixed(1)}`)
}

movieRating([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
])
