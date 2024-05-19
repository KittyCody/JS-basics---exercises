function generatePasswords(a, b, maxPasswords) {
  let passwordCount = 0
  let A = 35
  let B = 64

  while (passwordCount < maxPasswords) {
    let password =
      String.fromCharCode(A) +
      String.fromCharCode(B) +
      a +
      b +
      String.fromCharCode(B) +
      String.fromCharCode(A)

    console.log(password + "|")

    A++
    B++

    if (A > 55) A = 35
    if (B > 96) B = 64

    passwordCount++
  }
}

generatePasswords(20, 50, 10)
