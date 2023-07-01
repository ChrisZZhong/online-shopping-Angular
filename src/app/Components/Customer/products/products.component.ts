import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../Servies/product.service";
import {AdminProduct} from "../../../Modules/admin-product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(public router: Router, private productService: ProductService) {
  }
  allProducts: AdminProduct[] = [];

  ngOnInit(): void {
    this.productService.getAllOnSaleProducts().subscribe((res: any) => {
      this.allProducts = res.products;
      console.log(this.allProducts);
    });
  }
}
