
// let red=document.querySelector(".red")
// let orange=document.querySelector(".orange")
// let black=document.querySelector(".black")
// let pink=document.querySelector(".pink")
// let blue=document.querySelector(".blue")
// let allbox=document.querySelectorAll(".box")

/*
trying to change border of all boxes
allbox.forEach((box)=>{
box.addEventListener("click",(e)=>{
  
  console.log(e.target.className);
  // box.style.border="1px solid white"
 box.forEach((c)=>c.classlist.remove("boxboder"))

})
})

*/

//  red.addEventListener("click",()=>{

//    document.body.style.backgroundColor="red"
//  })
//  orange.addEventListener("click",()=>{

//    document.body.style.backgroundColor="orange"
//  })
//  black.addEventListener("click",()=>{

//    document.body.style.backgroundColor="black"
//  })
//  pink.addEventListener("click",()=>{

//    document.body.style.backgroundColor="pink"
//  })
//  blue.addEventListener("click",()=>{

//    document.body.style.backgroundColor="blue"
//  })




// code by hitesh sir

let Allbox=document.querySelectorAll(".box")
let body=document.querySelector("body")


Allbox.forEach((boxes)=>{

  boxes.addEventListener("click",(e)=>{

   if(e.target.id=="red")
   {
       body.style.backgroundColor=e.target.id
   }
   if(e.target.id=="orange")
   {
       body.style.backgroundColor=e.target.id
   }
   if(e.target.id=="black")
   {
       body.style.backgroundColor=e.target.id
   }
   if(e.target.id=="pink")
   {
       body.style.backgroundColor=e.target.id
   }
   if(e.target.id=="blue")
   {
       body.style.backgroundColor=e.target.id
   }

   
   
  })
 
})