import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../../Servies/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(public router: Router, private productService: ProductService){
  }
  ngOnInit(): void {
  }

  productForm = new FormBuilder().group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    description: ['', [Validators.required, Validators.minLength(1)]],
    wholesalePrice: [0, [Validators.required, Validators.minLength(1)]],
    retailPrice: [0, [Validators.required, Validators.minLength(1)]],
    quantity: [0, [Validators.required, Validators.minLength(1)]],
  });

  addProduct() {
    this.productService.addProduct(this.productForm.value).subscribe((response) => {
      console.log(response);
      alert("Product added successfully");
      this.router.navigate(['/adminProducts']);
    });
  }
}
