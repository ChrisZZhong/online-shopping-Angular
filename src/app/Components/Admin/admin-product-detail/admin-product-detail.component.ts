import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../Servies/product.service";
import {AdminProduct} from "../../../Modules/admin-product";

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent {
  constructor(public router: ActivatedRoute, private productService: ProductService){
  }
  id:any;
  product:AdminProduct = new AdminProduct();

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    this.productService.getProductDetails(this.id).subscribe((data: any) => {
      this.product = data.product;
      console.log(this.product);
    });
  }
}
