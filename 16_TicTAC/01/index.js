const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//let's create a function to initialise the game

function initGame(){
    currentPlayer="X";
    newGameBtn.classList.remove("active");
    gameInfo.innerHTML=`Current Player - ${currentPlayer}`
    gameGrid=["","","","","","","","",""]
boxes.forEach((box,index)=>{
    box.innerText=""
})
}
initGame();

function swapTrun(){
    if(currentPlayer==="X"){
        currentPlayer="O"
    }
    else{
        currentPlayer="X"
    }
    gameInfo.innerText=`Cureent player - ${currentPlayer}`
}
function handleClick(index){
  if(gameGrid[index]===""){
   boxes[index].innerText=currentPlayer;
   gameGrid[index]=currentPlayer;
   boxes[index].style.pointerEvents="none"
   swapTrun();
 checkGameover()
  }

}

function checkGameover(){
    let answer="";
  winningPositions.forEach((position)=>{
 
     if((gameGrid[position[0]]!=="" ||gameGrid[position[1]]!=="" ||gameGrid[position[2]]!=="")&&
      (gameGrid[position[0]]===gameGrid[position[1]]) && (gameGrid[position[1]]===gameGrid[position[2]]))
      {

        if(gameGrid[position[0]]=="X"){
              answer="X"
        }
        else{
            answer="O"
        }

//    disable pointer event
        boxes.forEach((box)=>{
            box.style.pointerEvents="none"

        })

        boxes[position[0]].classList.add("win")
        boxes[position[1]].classList.add("win")
        boxes[position[2]].classList.add("win")

           
      }
    
  });

  if(answer!==""){
    gameInfo.innerText=`Winner Player - ${answer}`;
    newGameBtn.classList.add("active")
    return;
}

// newGameBtn.classList.add("active")
}

boxes.forEach((box,index)=>{
  box.addEventListener('click',()=>{
    handleClick(index)
  })   
})

newGameBtn.addEventListener('click',initGame)
