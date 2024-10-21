
const container=document.querySelector('.container')
const card=document.querySelector(".card")
const h1=document.querySelector("h1")
const cardlist=document.querySelector(".add-card")

// container.appendChild(h1)

//  for(let i=0; i<=100;i++){
//   const newcard=card.cloneNode();
//   newcard.innerText=i;
//   container.appendChild(newcard)
//  }


// function sayhi(){
//   console.log("hey");
  
// }
// // h1.onclick=sayhi()
// h1.addEventListener("click",sayhi)


// function print(){
//   console.log("inside card");
// }
// card.addEventListener("click",print)


let count=1
card.addEventListener("click",(e)=>{
// console.log(e.type);

  let newcard=document.createElement("div")
  newcard.classList.add('card')
 newcard.innerText=count++;

//  newcard.addEventListener("click",(e)=>{ 
//   newcard.remove()
//  })

  container.appendChild(newcard)
})

container.addEventListener("click",(e)=>{
  if(e.target!==container){
    e.target.remove()
  }
  console.log(e.target.nodeName);
  // e.target.remove()
})



// mouseevent
// mouseenter
// mouseleave
//mousemove
//mouseout

// const intervalid = setInterval(()=>{
//   if(count>=5)
//   {
//     clearInterval(intervalid)
//   }
//   card.click()
// },1000)