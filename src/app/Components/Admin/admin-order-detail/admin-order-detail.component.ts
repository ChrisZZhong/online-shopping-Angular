import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../../Servies/order.service";
import {UserOrderDetail} from "../../../Modules/user-order-detail";
import {UserProduct} from "../../../Modules/user-product";
import {AdminProduct} from "../../../Modules/admin-product";
import {AdminItem} from "../../../Modules/admin-item";
import {AdminOrderDetail} from "../../../Modules/admin-order-detail";

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent {
  constructor(public router: ActivatedRoute, private orderService: OrderService, private cd: ChangeDetectorRef) {
  }
  responseData: any;
  id:any;
  order:AdminOrderDetail = new AdminOrderDetail();
  items:AdminItem[] = [];
  products:AdminProduct[] = [];

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
