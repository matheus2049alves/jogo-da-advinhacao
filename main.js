
let randomNumber = Math.round(Math.random()*10)
const btnTry = document.querySelector("#buttonTry")
const btnReset = document.querySelector("#buttonReset")
let xAttempts = 1;

//eventos
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', ResetEvent)


//funcões 
function handleClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  
  if (inputNumber.value == randomNumber){
    toggleScreen();
    document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas`
  }
  xAttempts++;
  inputNumber.value = ""
}

function ResetEvent (){
  toggleScreen();
  randomNumber = Math.round(Math.random()*10)
  xAttempts = 1;
}

function toggleScreen (){
  document.querySelector(".screen1").classList.toggle("hide")
  document.querySelector(".screen2").classList.toggle("hide")
}