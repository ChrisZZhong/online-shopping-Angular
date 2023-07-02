import { Component } from '@angular/core';
import {CartProduct} from "../../../Modules/cart-product";
import {CartService} from "../../../Servies/cart.service";
import {OrderService} from "../../../Servies/order.service";
import {PlaceProduct} from "../../../Modules/place-product";
import {Router} from "@angular/router";
import {PlaceOrder} from "../../../Modules/place-order";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts: CartProduct[] = [];
  placeOrderProducts: PlaceProduct[] = [];
  inputValues: number[] = [];
  totalPrice: number = 0;
  responseData: any;
  order: PlaceOrder = new PlaceOrder();
  constructor(private cartService: CartService, public orderService: OrderService, public router: Router) {
  }

  ngOnInit(): void {
    this.loadCartProducts();
  }

  changeAmount(product: CartProduct, quantity: number) {
    this.cartService.changeAmount(product, quantity);
    this.loadCartProducts();
  }

  removeProduct(product: CartProduct) {
    this.cartService.removeFromCart(product);
    this.loadCartProducts();
  }

  loadCartProducts() {
    if (localStorage.getItem('cart') != null) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart') || '{}');
      this.cartProducts.forEach((product) => {
        this.inputValues.push(product.quantity);
      });
    } else {
      this.cartProducts = [];
    }
    this.totalPrice = this.cartService.getTotalPrice();
  }

  placeOrder() {
    this.cartProducts.forEach((product) => {
      let p = new PlaceProduct();
      p.productId = product.productId;
      p.quantity = product.quantity;
      this.placeOrderProducts.push(p);
    });
    this.order.order = this.placeOrderProducts;
    this.orderService.placeOrder(this.order).subscribe((res) => {
      this.responseData = res;
      if (this.responseData.status == "success") {
        alert('Order placed successfully');
        this.cartService.removeAllCart();
        this.loadCartProducts();
        this.router.navigate(['/home']);
      } else {
        alert('Order failed');
      }
      this.placeOrderProducts = [];
      this.order = new PlaceOrder();
    });
  }
}
