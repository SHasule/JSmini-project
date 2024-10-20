

let progressvalue=document.querySelector(".progress-value")
let checkboxlist=document.querySelectorAll(".custom-checkbox");
const inputfields=document.querySelectorAll(".goal-input")
const errlable=document.querySelector(".err-lable")
// const showerr=document.querySelector("..showerr")
const progressbar=document.querySelector(".progressbar")
checkboxlist.forEach((checkbox)=>{
checkbox.addEventListener("click",(e)=>{
  // consovle.log("clicked");
 let complatedinputfiels= [...inputfields].every((input)=>{
    return input.value
  })

  if(complatedinputfiels){
   
    checkbox.parentElement.classList.toggle("complated")
    progressvalue.computedStyleMap.width="33.33%"
   }
  else{
    progressbar.classList.add("showerr")
  }
 
})
  
})
inputfields.forEach((input)=>{
  input.addEventListener('focus',()=>{
    progressbar.classList.remove("showerr")
  })
})