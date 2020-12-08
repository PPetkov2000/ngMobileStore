import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../shared/interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string = "http://localhost:5000/api/orders";

  constructor(private http: HttpClient) { }

  createOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(`${this.baseUrl}/create`, order);
  }

  listOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}`);
  }

  listMyOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/myorders`);
  }

  listOrderDetails(id: string): Observable<IOrder> {
    return this.http.get<IOrder>(`${this.baseUrl}/${id}`);
  }
}
