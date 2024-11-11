let inputfeild=document.querySelector("#inputfeild")
let text=document.querySelector(".text")
function Add(){
  if(inputfeild.value==""){
    alert("Please Enter Task")
  }
  else{
    let newelement=document.createElement("ul")
    newelement.classList.add("tasklist")
    newelement.innerHTML=`${inputfeild.value} <button class="btn">remove</button>`
    
    text.appendChild(newelement)
   inputfeild.value="";
   
   newelement.querySelector("button").addEventListener("click",function(){
    newelement.remove()
   })
  }
}