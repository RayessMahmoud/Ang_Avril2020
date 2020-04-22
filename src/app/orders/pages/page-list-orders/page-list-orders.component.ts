import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection: Order[];
  constructor(private os: OrdersService) { }
  ngOnInit(): void {
    this.os.collection.subscribe((datas) => {
      console.log(datas);
      this.collection = datas;
    });
  }

}
