import {ChangeDetectorRef, Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService} from "../../../Servies/order.service";
import { Router, RouterLink } from '@angular/router';
import {catchError, map, of} from "rxjs";
import {UserOrder} from "../../../Modules/userOrder";
import {ProductService} from "../../../Servies/product.service";
import {RecentProduct} from "../../../Modules/recent-product";
import {FrequentProduct} from "../../../Modules/frequent-product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  responseData: any;
  orders:UserOrder[] = [];
  recentProducts:RecentProduct[] = [];
  frequentProducts:FrequentProduct[] = [];
  constructor(public orderService: OrderService,public productService: ProductService, public router: Router) {
  }
  ngOnInit(): void {
    // get order history
    this.orderService.getAllOrders().subscribe(
      res=>{
        this.orders = res.order;
        // console.log(this.orders);
      }
    );
    // get recent products
    this.productService.getRecentlyPurchasedProducts(3).subscribe(
      res=>{
        this.recentProducts = res.recentProducts;
        // console.log(this.recentProducts);
      }
    );
    // get frequent products
    this.productService.getMostFrequentlyPurchasedProducts(3).subscribe(
      res=>{
        this.frequentProducts = res.frequentProducts;
        // console.log(this.frequentProducts);
      }
      );

  }

  cancel(orderId: any) {
    this.orderService.cancelOrder(orderId).subscribe(
      res=>{
        this.responseData = res;
        console.log(this.responseData.status);
        if(this.responseData.status == "success"){
          alert("Order cancelled successfully");
          this.orders.forEach((order, index) => {
            if (order.orderId === orderId) {
              order.orderStatus = "Cancelled";
            }
          });
        }
        else{
          alert("Order cancellation failed");
        }
      }
    );
  }
}
