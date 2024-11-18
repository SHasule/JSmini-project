import { getCartProductFromLs } from "./getCartProductFromLs";
import { UpdateCartValue } from "./UpdateCartValue";

getCartProductFromLs()
export const addToCart=(event,id,stock)=>{

  let arrLocalStrorageProduct=getCartProductFromLs();
   const CurrentElem=document.querySelector(`#card${id}`);

   let quantity=CurrentElem.querySelector(".productQuantity").innerText;
   let price=CurrentElem.querySelector('.productPrice').innerText;
 
   price=price.replace("₹" , "");

   let existingProd=arrLocalStrorageProduct.find((curProd)=>
    curProd.id===id
  );
 
if(existingProd){
  console.log(`q`,quantity);
  
}


  if(existingProd){
    // alert("existing product")
    return false
  }

   price=Number(price*quantity)
   quantity=Number(quantity)
   
   
   arrLocalStrorageProduct.push({id,quantity,price});
   localStorage.setItem("CartProductLS",JSON.stringify(arrLocalStrorageProduct));

      
    UpdateCartValue(arrLocalStrorageProduct)

  }