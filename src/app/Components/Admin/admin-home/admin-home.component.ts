import { Component } from '@angular/core';
import {UserOrder} from "../../../Modules/userOrder";
import {OrderService} from "../../../Servies/order.service";
import {Router} from "@angular/router";
import {ProductService} from "../../../Servies/product.service";
import {ProfitProduct} from "../../../Modules/profit-product";
import {PopularProduct} from "../../../Modules/popular-product";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  allOrders: UserOrder[] = [];
  canCancel: boolean[] = [];
  profitProducts: ProfitProduct[] = [];
  popularProducts: PopularProduct[] = [];
  salesProducts: PopularProduct[] = [];
  responseData: any;
  constructor(public orderService: OrderService,public productService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      res=>{
        this.allOrders = res.order;
        console.log(this.allOrders);
        this.allOrders.forEach((order, index) => {
          if (order.orderStatus === "Processing") {
            this.canCancel[index] = true;
          } else {
            this.canCancel[index] = false;
          }
        });
      });
    this.productService.getMostProfitableProducts(3).subscribe(
      res=>{
        this.profitProducts = res.profitProducts;
        console.log(this.profitProducts);
      });
    this.productService.getMostPopularProducts(3).subscribe(
      res=>{
        this.popularProducts = res.popularProducts;
        console.log(this.popularProducts);
      });
    this.productService.getMostPopularProducts(0).subscribe(
      res=>{
        this.salesProducts = res.popularProducts;
        console.log(this.popularProducts);
      });
  }

  cancel(orderId: any) {
    this.orderService.cancelOrder(orderId).subscribe(
      res=>{
        this.responseData = res;
        if(this.responseData.status == "success"){
          alert("Order cancelled successfully");
          this.allOrders.forEach((order, index) => {
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

  complete(orderId: any) {
    this.orderService.completeOrder(orderId).subscribe(
      res=>{
        this.responseData = res;
        if(this.responseData.status == "success"){
          alert("Order complete successfully");
          this.allOrders.forEach((order, index) => {
            if (order.orderId === orderId) {
              order.orderStatus = "Cancelled";
            }
          });
        } else {
          alert("Order complete failed");
        }
      });
  }
}
