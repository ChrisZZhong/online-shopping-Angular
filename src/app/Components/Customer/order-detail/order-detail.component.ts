import {ChangeDetectorRef, Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {catchError, of} from "rxjs";
import {OrderService} from "../../../Servies/order.service";
import {UserOrderDetail} from "../../../Modules/user-order-detail";
import {UserProduct} from "../../../Modules/user-product";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  constructor(public router: ActivatedRoute, private orderService: OrderService, private cd: ChangeDetectorRef) {
  }
  responseData: any;
  id:any;
  order:UserOrderDetail = new UserOrderDetail();
  items:any;
  products:UserProduct[] = [];

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    this.orderService.getOrderDetails(this.id).subscribe((data: any) => {
      this.order = data.order;
      this.items = this.order.items;
      for (let i = 0; i < this.items.length; i++) {
        this.products.push(this.items[i].product);
      }
      console.log(this.items);
    });
  }

  cancel(orderId: number) {
    this.orderService.cancelOrder(orderId).subscribe(
      res=>{
        this.responseData = res;
        console.log(this.responseData.status);
        if(this.responseData.status == "success"){
          alert("Order cancelled successfully");
          this.cd.detectChanges();
          this.order.orderStatus = "Cancelled";
        }
        else{
          alert("Order cancellation failed");
        }
      }
    );
  }
}
