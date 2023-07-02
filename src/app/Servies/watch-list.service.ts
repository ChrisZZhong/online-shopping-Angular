import { Injectable } from '@angular/core';
import {UserProduct} from "../Modules/user-product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  baseUrl='http://localhost:8080/watchlist/product/'
  constructor(private http: HttpClient) {}

  addToWishList(product: UserProduct) {
    return this.http.post<any>(
      this.baseUrl + product.productId, null);
  }

  getWishList() {
    return this.http.get<any>(
      this.baseUrl + 'all');
  }

  deleteFromWishList(product: UserProduct) {
    return this.http.delete<any>(
      this.baseUrl + product.productId);
  }

}
