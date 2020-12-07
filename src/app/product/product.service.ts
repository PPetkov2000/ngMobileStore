import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:5000/api/products";
 
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}`);
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  getTopProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}/top`);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.baseUrl}/${product._id}`, product);
  }

  deleteProduct(id: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
