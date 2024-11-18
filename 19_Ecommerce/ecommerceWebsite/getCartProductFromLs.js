import { UpdateCartValue } from "./UpdateCartValue";

export const getCartProductFromLs=()=>{

  let cartProducts=localStorage.getItem("CartProductLS");

  if(!cartProducts){
    return [];
  }
  cartProducts=JSON.parse(cartProducts);
  UpdateCartValue(cartProducts)
  return cartProducts;
}