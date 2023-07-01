import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl='http://localhost:8080/orders/'
  constructor(private http:HttpClient) {}

  getAllOrders() : Observable<any>{
    return this.http.get<any>(
      this.baseUrl + "all");
  }

  getOrderDetails(orderId: any) {
    return this.http.get<any>(
      this.baseUrl + orderId);
  }

  cancelOrder(orderId: any) {
    return this.http.patch(
      this.baseUrl + orderId + "/cancel", null);
  }

}
