import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../../Servies/product.service";
import {AdminProduct} from "../../../Modules/admin-product";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
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
