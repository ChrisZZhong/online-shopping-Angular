import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  baseUrl='http://localhost:8080/products/'
  getProductDetails(productId: any) {
    return this.http.get<any>(
      this.baseUrl + productId);
  }

  getMostFrequentlyPurchasedProducts(limit: any) : Observable<any>{
    return this.http.get<any>(
      this.baseUrl + "frequent/" +limit);
  }

  getRecentlyPurchasedProducts(limit: any) : Observable<any>{
    return this.http.get<any>(
      this.baseUrl + "recent/" +limit);
  }

  getAllOnSaleProducts() : Observable<any>{
    return this.http.get<any>(
      this.baseUrl + "all");
  }


}