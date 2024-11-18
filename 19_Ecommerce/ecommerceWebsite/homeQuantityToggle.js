

export const homeQuantityToggle=(event,id,stock)=>{
let currentCardElements=document.querySelector(`#card${id}`)
// console.log(currentCardElements);
 let productQuantity= currentCardElements.querySelector(".productQuantity")
//  console.log(productQuantity);

let quantity=parseInt(productQuantity.getAttribute("data-quantity")) || 1;

if(event.target.className==="cartIncrement"){
  if(quantity<stock){
    quantity+=1;
  }
  else if(quantity===stock){
  quantity=stock
  }
}
if(event.target.className==="cartDecrement"){
  if(quantity>1){
    quantity-=1;
  }
}

 productQuantity.innerText=quantity;
 productQuantity.setAttribute("data-quantity",quantity.toString())
 return quantity;
}