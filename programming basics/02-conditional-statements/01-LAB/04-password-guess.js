function passWordStatement(password) {
  const enteredPassword = password[0]
  if (enteredPassword === "s3cr3t!P@ssw0rd") {
    console.log("Welcome")
  } else {
    console.log("Wrong password!")
  }
}

passWordStatement(["s3cr3t!P@ssw0rd"])
