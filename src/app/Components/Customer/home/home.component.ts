import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService} from "../../../Servies/order.service";
import { Router, RouterLink } from '@angular/router';
import {catchError, of} from "rxjs";
import {AllUserOrders} from "../../../Modules/allUserOrders";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  responseData: any;
  orders:AllUserOrders=new AllUserOrders();
  constructor(public orderService: OrderService, public router: Router) {
  }
  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((response) => {
      this.responseData = response;
      console.log(this.responseData);
    });
  }
}
