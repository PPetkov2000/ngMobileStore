import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../shared/interfaces/product';
import { catchError, tap } from 'rxjs/operators';
import { IReview } from '../shared/interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[];
  topProducts: IProduct[];
  baseUrl: string = "http://localhost:5000/api/products";
 
  constructor(private http: HttpClient) { }

  getProducts(keyword = "", pageNumber = ""): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?keyword=${keyword}&pageNumber=${pageNumber}`)
      .pipe(
        tap((response) => this.products = response.products),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  getTopProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}/top`)
      .pipe(
        tap((products) => this.topProducts = products),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.baseUrl}/${product._id}`, product);
  }

  deleteProduct(id: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createProductReview(productId: string, review: IReview): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.baseUrl}/${productId}/reviews`, review);
  }

  deleteProductReview(productId: string, reviewId: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.baseUrl}/${productId}/reviews/${reviewId}`);
  }

}
