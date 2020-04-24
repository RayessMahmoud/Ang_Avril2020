import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-del',
  templateUrl: './icon-del.component.html',
  styleUrls: ['./icon-del.component.scss']
})
export class IconDelComponent implements OnInit {
  public faTrash = faTrash;
  constructor() { }

  ngOnInit(): void {
  }

}
