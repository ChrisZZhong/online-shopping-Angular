import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../Servies/product.service";
import {AdminProduct} from "../../../Modules/admin-product";
import {CartService} from "../../../Servies/cart.service";
import {UserProduct} from "../../../Modules/user-product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(public router: Router, private productService: ProductService, public cartService: CartService) {
  }
  allProducts: UserProduct[] = [];
  inputValues: number[] = [];


  ngOnInit(): void {
    this.productService.getAllOnSaleProducts().subscribe((res: any) => {
      this.allProducts = res.products;
      this.allProducts.forEach((product) => {
        this.inputValues.push(1);
      })
    });
  }

  addToCart(product: UserProduct, quantity: number) {
    this.cartService.addToCart(product, quantity);
  }
}
