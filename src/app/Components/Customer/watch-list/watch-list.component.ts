import { Component } from '@angular/core';
import {UserProduct} from "../../../Modules/user-product";
import {WatchListService} from "../../../Servies/watch-list.service";

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
  watchList: UserProduct[] = [];
  constructor(public watchListService: WatchListService) {
  }
  ngOnInit(): void {
    this.watchListService.getWishList().subscribe((res: any) => {
      this.watchList = res.products;
    });
  }

  removeFromWatchList(product: UserProduct) {
    this.watchListService.deleteFromWishList(product).subscribe(
      (response) => {
        alert("Product removed from watch list successfully!");
        this.watchList = this.watchList.filter(item => item.productId !== product.productId);
      });
  }
}
