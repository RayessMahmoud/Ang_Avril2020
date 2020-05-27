import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.scss']
})
export class DbComponent implements OnInit {
  public currtemp : string;
currentURL = window.location.href;
  constructor() { }

  ngOnInit(): void {

  }

  ngonchange(): void {
    ///this.currtemp= this.currentURL
  }



}
