
const randomNumber = Math.round(Math.random()*10)
let xAttempts = 1;

function handleClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  
  if (inputNumber.value == randomNumber){
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas`
  }
  xAttempts++;
  inputNumber.value = ""
}

const btnTry = document.querySelector("#buttonTry")
const btnPlayAgain = document.querySelector("#buttonReset")

btnTry.addEventListener('click', handleClick)
btnPlayAgain.addEventListener('click', function() {
  document.querySelector(".screen1").classList.remove("hide")
  document.querySelector(".screen2").classList.add("hide")
  xAttempts = 1;
})