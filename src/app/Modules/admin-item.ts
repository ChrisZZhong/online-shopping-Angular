import {AdminProduct} from "./admin-product";

export class AdminItem {
  itemId!:number;
  orderId:number=0;
  quantity:number=0;
  purchasedPrice:number=0;
  wholesalePrice:number=0;
  product:AdminProduct=new AdminProduct();
}
