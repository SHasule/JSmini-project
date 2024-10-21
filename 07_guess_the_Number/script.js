
let randomNumber=(parseInt(Math.random()*100+1))

let submit=document.querySelector("#subt")
let userInput=document.querySelector("#guessField")
let guessSlot=document.querySelector("#guesses")
let remaning=document.querySelector("#lastResult")
let lowOrHi=document.querySelector("#lowOrHi")
let StartOver=document.querySelector("#resultParas")


const p=document.createElement("p")

let preGuess=[]
let numGuess=1;

let playgame=true;

if(playgame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    
   let guess=parseInt( userInput.value)
   validateGuess(guess)    
   
   lowOrHi.innerHTML="hey js"
  })
}
function displayGuess(guess){
  userInput.value=""
  guessSlot.innerHTML += `${guess}`
  numGuess++;
  remaning.innerHTML= `${11-numGuess}`
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("enter a valid number")           
  }
  else if(guess<1){
    alert("enter a number more than 1")          
  }
  else if(guess>100){
    alert("enter a  number less than 100")          
  }
  else{
    preGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game over. random number was ${randomNumber}`)
     gameEnd()
    }

    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}


function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`you won the game`)
    gameEnd()
  }
  else if(guess<randomNumber){
  displayMessage(`number is too small`)
  }
  else if(guess>randomNumber){
    displayMessage(`number is too high`)
  }

}


// function displayGuess(guess){
//   userInput.value=""
//   guessSlot.innerHTML += `${guess}`
//   numGuess++;
//   remaning.innerHTML= `${11-numGuess}`
// }

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
  lowOrHi.innerHTML="hey js"
}

function gameEnd(){
  
}
function newGame(){

}