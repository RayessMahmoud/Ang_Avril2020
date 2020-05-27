import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public title: string;
  public subtitle: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Orders';
    this.subtitle = 'Add an order';
  }

  public add(item: Client) {
    console.log('add clicked');
    /*this.os.add(item).subscribe((res) => {
      // traiter res de l'api
      console.log(res);
      this.router.navigate(['orders']);

    });*/
  }

}
