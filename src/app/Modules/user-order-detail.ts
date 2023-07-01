import {UserItem} from "./user-item";

export class UserOrderDetail {
  orderId!: number;
  userId: number = 0;
  datePlaced: String = '';
  orderStatus: string = '';
  items: UserItem[] = [];
}
