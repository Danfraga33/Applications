const password = document.getElementById("password")
const background = document.getElementById("background")

password.addEventListener("input", (e) => {
  const passwordCheck = "Mon1266"
  let newPass = passwordCheck.split("")
  /////////////

  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`

  /*
  PSEUDO
  1. If input[i] === password[i]

  */

  newPass.forEach((el, i) => {
    if (input[i] === el) {
      console.log(el)
    }
  })

  newPass.forEach((_, i) => {
    if (input[0] === newPass[0]) {
      console.log(_)
    }
  })

  for (let i = 1; i < newPass.length; i++) {
    if (input[i] === passwordCheck[i]) {
      console.log(input[0])
    }
  }
})
