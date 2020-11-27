import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/interfaces/product';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "http://localhost:5000/api/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`);
  }

}
