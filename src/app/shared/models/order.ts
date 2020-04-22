import { OrderI } from '../interfaces/order-i';
import { StatesOrder } from '../enums/states-order.enum';

export class Order implements OrderI{
  id: number;
  typePresta: string;
  client: string;
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: StatesOrder;
  comment: string;
  constructor(param?: Partial<Order>){
    if(param){
      Object.assign(this, param)
    }

  }
  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    return this.totalHt()*(1+this.tva/100);
  }
}
