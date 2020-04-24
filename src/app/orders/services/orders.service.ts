import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { StatesOrder } from 'src/app/shared/enums/states-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  public firstOrder$ = new BehaviorSubject<Order>(null);
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((tab) => {
        this.firstOrder$.next(tab[0]);
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }


  // get collection
  public get collection(): Observable<Order[]> {
    return this.pCollection;
  }
  // set collection
  public set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }


  // update state of item
  public changeState(item: Order, state: StatesOrder) {
    const obj = new Order({ ...item });
    obj.state = state;
    return this.update(obj);
  }
  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  //Add Item
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }


  public delete(id: string): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}orders/${id}`);
  }

  // get item by id from collection
  public getItemById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }




}
