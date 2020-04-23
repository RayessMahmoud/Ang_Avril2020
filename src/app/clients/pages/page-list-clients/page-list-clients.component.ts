import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatesClient } from 'src/app/shared/enums/states-client.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[];
  public title: string;
  public subtitle: string;
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public states = Object.values(StatesClient);
  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.collection$ = this.cs.collection;
    this.title = "Clients";
    this.subtitle = "All Clients";
    this.btnRoute = { label: 'Add an Client', route: 'add' };
    this.btnHref = { label: 'Search on Google', href: 'http://www.google.fr' };
    this.btnAction = { label: 'Click me', action: 'true' };
    this.headers = [
      'Name',
      'Email',
      'State',
    ];
  }

  public changeState(item: Client, event) {
    this.cs.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public action() {
    console.log('action called');
  }

}
