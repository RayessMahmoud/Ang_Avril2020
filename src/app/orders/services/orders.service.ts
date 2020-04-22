import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;


  private urlApi = environment.urlApi;


  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`);
  }


  // get collection
  public get collection(): Observable<Order[]> {
    return this.pCollection;
  }
  // set collection
  public set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }
}
