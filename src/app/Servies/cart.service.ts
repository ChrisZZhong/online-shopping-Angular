import { Injectable } from '@angular/core';
import {CartProduct} from "../Modules/cart-product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProduct:CartProduct=new CartProduct();
  constructor() { }

  addToCart(product:any, quantity:number){
    // initialize cart
    let cart:CartProduct[]=[];
    if(localStorage.getItem('cart')!=null){
      cart=JSON.parse(localStorage.getItem('cart')||'{}');
    }
    // if exists, update quantity
    if (cart.find(x => x.productId == product.productId)) {
      cart.forEach((item,index)=>{
        if(product.productId==item.productId){
          cart[index].quantity+=quantity;
        }
      });
      localStorage.setItem('cart',JSON.stringify(cart));
      alert("product added to cart")
    } else {
      // else add new product
      let cartProduct:CartProduct=new CartProduct();
      cartProduct.productId=product.productId;
      cartProduct.quantity=quantity;
      cartProduct.name=product.name;
      cartProduct.retailPrice=product.retailPrice;
      cart.push(cartProduct);
      localStorage.setItem('cart',JSON.stringify(cart));
    }
  }

  getCart():CartProduct[]{
    let cart:CartProduct[]=[];
    if(localStorage.getItem('cart')!=null){
      cart=JSON.parse(localStorage.getItem('cart')||'{}');
    }
    return cart;
  }

  removeFromCart(product:any): string{
    let cart:CartProduct[]=[];
    if(localStorage.getItem('cart')!=null){
      cart=JSON.parse(localStorage.getItem('cart')||'{}');
    } else {
      return 'Cart is empty';
    }
    if (cart.find(x => x.productId == product.productId)) {
      cart.forEach((item,index)=>{
        if(product.productId==item.productId){
          cart.splice(index,1);
        }
      });
      localStorage.setItem('cart',JSON.stringify(cart));
      return 'Product removed from cart';
    } else {
      return 'Product not found in cart';
    }
  }

  changeAmount(product:any, quantity:number){
    let cart:CartProduct[]=[];
    if(localStorage.getItem('cart')!=null){
      cart=JSON.parse(localStorage.getItem('cart')||'{}');
    }
    cart.forEach((item,index)=>{
      if(product.productId==item.productId){
        item.quantity = quantity;
      }
    });
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  getTotalPrice() : number {
    let cart:CartProduct[]=[];
    if(localStorage.getItem('cart')!=null){
      cart=JSON.parse(localStorage.getItem('cart')||'{}');
    }
    let totalPrice:number=0;
    cart.forEach((item,index)=>{
      totalPrice+=item.retailPrice*item.quantity;
    });
    return totalPrice;
  }


  removeAllCart() {
    let cart:CartProduct[]=[];
    localStorage.setItem('cart',JSON.stringify(cart));
  }
}
