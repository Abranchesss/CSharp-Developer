import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]>{
    return this.http.get<Order[]>('https://localhost:7104/Api/Orders');
  }

  addOrder(order:Order): Observable<Object>{
    console.log(order);
    return this.http.post("https://localhost:7104/Api/Orders", order, {responseType: 'text'});
  }
}
