
let cartValue=document.querySelector("#cartValue")
export const UpdateCartValue=(CartProduct)=>{
   return cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping">${CartProduct.length}</i>`
}