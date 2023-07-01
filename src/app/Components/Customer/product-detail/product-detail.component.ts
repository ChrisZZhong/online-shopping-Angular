import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {catchError, of} from "rxjs";
import {ProductService} from "../../../Servies/product.service";
import {UserProduct} from "../../../Modules/user-product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(public router: ActivatedRoute, private productService: ProductService){
  }
  id:any;
  product:UserProduct = new UserProduct();

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
