
let buttons=document.querySelectorAll('.btn')
let screen=document.querySelector('.screen');
let equal=document.querySelector(".btn-equal")
let clear=document.querySelector(".btn-clear")
buttons.forEach(function(btn){
  btn.addEventListener('click',function(e){
    let value=e.target.dataset.num
    screen.value+=value
  })
})

// equal.addEventListener("click",function(e){
// //  if(screen.value==""){
// //   screen.value="";
  
// //  }else{
 
  
// //   let ans=eval(screen.value)
// //   screen.value=ans
// //   console.log(ans);
  
// //  }
// screen.value=eval(screen.value)

// })
function cal(){
  try{
    screen.value=eval(screen.value)
  }
  catch(err){
 screen.value="Error"
  }
}

clear.addEventListener('click',function(){
  screen.value=""
})

