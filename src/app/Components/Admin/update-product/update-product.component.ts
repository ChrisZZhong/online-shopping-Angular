import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../Servies/product.service";
import {AdminProduct} from "../../../Modules/admin-product";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  constructor(public router: ActivatedRoute, private productService: ProductService){
  }
  id:any;
  product:AdminProduct = new AdminProduct();
  productForm = new FormBuilder().group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    description: ['', [Validators.required, Validators.minLength(1)]],
    wholesalePrice: [0, [Validators.required, Validators.minLength(1)]],
    retailPrice: [0, [Validators.required, Validators.minLength(1)]],
    quantity: [0, [Validators.required, Validators.minLength(1)]],
  });

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    this.productService.getProductDetails(this.id).subscribe((data: any) => {
      this.product = data.product;
      // console.log(this.product);
    });
  }

  editProduct() {
    // console.log(this.productForm.value)
    this.productService.editProduct(this.productForm.value, this.id).subscribe((data: any) => {
      this.productService.getProductDetails(this.id).subscribe((data: any) => {
        this.product = data.product;
        // console.log(this.product);
      });
      alert("Product updated successfully");
    });
  }
}
