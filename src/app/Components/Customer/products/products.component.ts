import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../Servies/product.service";
import {AdminProduct} from "../../../Modules/admin-product";
import {CartService} from "../../../Servies/cart.service";
import {UserProduct} from "../../../Modules/user-product";
import {WatchListService} from "../../../Servies/watch-list.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(public router: Router, private productService: ProductService, public cartService: CartService,
              public watchListService: WatchListService) {
  }
  allProducts: UserProduct[] = [];
  inputValues: number[] = [];
  responseData : any;


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

  addToWishList(product: UserProduct) {
    console.log(product);
    this.watchListService.addToWishList(product).subscribe((res: any) => {
      this.responseData = res;
      if (this.responseData.status == "success") {
        alert("Product added to watch list successfully!");
      } else {
        alert("Product already exists in watch list!");
      }
    });
  }
}
