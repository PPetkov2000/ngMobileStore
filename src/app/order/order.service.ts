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

  listOrders(pageNumber = ""): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?pageNumber=${pageNumber}`);
  }

  listMyOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/myorders`);
  }

  listOrderDetails(id: string): Observable<IOrder> {
    return this.http.get<IOrder>(`${this.baseUrl}/${id}`);
  }

  payOrder(id: string, paymentResult: any): Observable<IOrder> {
    return this.http.put<IOrder>(`${this.baseUrl}/${id}/pay`, paymentResult);
  }
}
