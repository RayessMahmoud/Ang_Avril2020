import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StatesClient } from 'src/app/shared/enums/states-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`)/*.pipe(???)*/;
  }



  // get collection
  public get collection(): Observable<Client[]> {
    return this.pCollection;
  }
  // set collection
  public set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }


  // update state of item
  public changeState(item: Client, state: StatesClient) {
    const obj = new Client({...item});
    obj.state = state;
    return this.update(obj);
  }
  // update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }





}
