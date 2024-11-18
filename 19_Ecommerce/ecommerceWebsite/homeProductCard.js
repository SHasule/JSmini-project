import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

let productContainer=document.querySelector("#productContainer")
let productTemplate=document.querySelector("#productTemplate")


export const showProductContainer=(products)=>{
  if(!products){
    return false;
  }
   products.forEach((curProd)=>{
    const{brand,category,description,id,image,name,price,stock}=curProd;
 

    let ProductClone=document.importNode(productTemplate.content,true);
    ProductClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
    ProductClone.querySelector(".productName").textContent=name;
    ProductClone.querySelector(".category").textContent=category;
   ProductClone.querySelector(".productImage").src=image;
   ProductClone.querySelector(".productImage").alt=name
   ProductClone.querySelector(".productDescription").textContent=description
   ProductClone.querySelector(".productPrice").textContent=`₹${price}`
   ProductClone.querySelector(".productActualPrice").textContent=`₹${price*4}`
   ProductClone.querySelector(".productStock").textContent=stock
  
  ProductClone.querySelector(".stockElement").addEventListener('click',(event)=>{
  homeQuantityToggle(event,id,stock);
  })

  ProductClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=>{
       addToCart(event,id,stock)
  })
  
   productContainer.append(ProductClone)
   })


}