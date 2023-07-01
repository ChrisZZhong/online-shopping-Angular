import {AdminItem} from "./admin-item";

export class AdminOrderDetail {
  orderId!: number;
  userId: number = 0;
  datePlaced: String = '';
  orderStatus: string = '';
  items: AdminItem[] = [];
}
