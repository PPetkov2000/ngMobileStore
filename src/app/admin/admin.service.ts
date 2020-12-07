import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../shared/interfaces/order';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl: string = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/users/${id}`);
  }

  createOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(`${this.baseUrl}/create`, order);
  }

  listOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}`);
  }
}
