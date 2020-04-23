import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public title: string;
  public subtitle: string;
  name = new FormControl('');
  constructor(private os: OrdersService, private router: Router) { }
  ngOnInit(): void {
    this.title = 'Orders';
    this.subtitle = 'Add an order';
  }
  public add(item: Order) {
    this.os.add(item).subscribe((res) => {
      // traiter res de l'api
      console.log(res);
      this.router.navigate(['orders']);

    });
  }

}
