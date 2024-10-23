

let randomcolor=function(){
 
  let hexvalue="0123456789ABCDEF"
 let color="#";
 for(let i=0;i<6; i++){
  color+=hexvalue[Math.floor(Math.random()*16)]
 }
 return color
}


// console.log(Math.floor(Math.random()*16));
let chagecolor;
let startChaningcolor=function(){
  if(!chagecolor){
    chagecolor= setInterval(colors,1000)
  }
  function colors(){
    document.body.style.backgroundColor=randomcolor()
    console.log(randomcolor());
  }
 
}

let stopChaningcolor=function(){
  clearInterval(chagecolor)
  chagecolor=null
}

let start=document.querySelector("#start")
start.addEventListener('click',startChaningcolor)
document.querySelector("#stop").addEventListener('click',stopChaningcolor)