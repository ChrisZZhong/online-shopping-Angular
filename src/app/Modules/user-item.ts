import {UserProduct} from "./user-product";

export class UserItem {
  itemId!:number;
  quantity:number=0;
  purchasedPrice:number=0;
  product:UserProduct=new UserProduct();
}
