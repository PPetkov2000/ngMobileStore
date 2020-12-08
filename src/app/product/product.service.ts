import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/interfaces/product';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[];
  baseUrl: string = "http://localhost:5000/api/products";
 
  constructor(private http: HttpClient) { }

  getProducts(keyword = "", pageNumber = ""): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}?keyword=${keyword}&pageNumber=${pageNumber}`)
      .pipe(
        tap((products) => this.products = products)
      );
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
