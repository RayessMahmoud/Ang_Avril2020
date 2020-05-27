import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';
import { StatesClient } from 'src/app/shared/enums/states-client.enum';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input() item = new Client();
  @Output() submited: EventEmitter<Client> = new EventEmitter();
  public form: FormGroup;
  public states = Object.values(StatesClient);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.item.id],
      name: [this.item.name,Validators.compose([Validators.required,Validators.minLength(2)])],
      email: [this.item.email,Validators.required],
      state: [this.item.state],
    });
  }

  public onSubmit() {
    console.log('zzzzzz');
    //console.log(this.form.value);
    //this.submited.emit(this.form.value);
  }

}
