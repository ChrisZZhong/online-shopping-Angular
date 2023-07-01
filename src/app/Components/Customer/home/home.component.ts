import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService} from "../../../Servies/order.service";
import { Router, RouterLink } from '@angular/router';
import {catchError, map, of} from "rxjs";
import {AllUserOrders} from "../../../Modules/allUserOrders";
import {UserOrder} from "../../../Modules/userOrder";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  responseData: any;
  orders:UserOrder[] = [];
  constructor(public orderService: OrderService, public router: Router) {
  }
  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      res=>{
        this.orders = res.order;
        console.log(this.orders);
      }
    );
  }
}
