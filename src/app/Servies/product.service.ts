import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {AdminProduct} from "../Modules/admin-product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: AdminProduct = new AdminProduct();

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

  getMostProfitableProducts(limit: any) : Observable<any>{
    return this.http.get<any>(
      this.baseUrl + "profit/" +limit);
  }

  // by sales amount limit = 0 --> all orders
  getMostPopularProducts(limit: any) : Observable<any>{
    return this.http.get<any>(
      this.baseUrl + "popular/" +limit);
  }


  editProduct(AdminProduct: any, productId: number) : Observable<any>{
    return this.http.patch<any>(
      this.baseUrl + productId, AdminProduct);
  }

  addProduct(AdminProduct: any) : Observable<any>{
    return this.http.post<any>(
      this.baseUrl, AdminProduct);
  }
}
