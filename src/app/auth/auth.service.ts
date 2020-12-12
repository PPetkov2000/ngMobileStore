import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:5000/api/users";
  currentUser: IUser;

  constructor(private http: HttpClient, private router: Router, private cartService: CartService) { }

  registerUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/register`, data).pipe(tap((user) => this.currentUser = user));
  } 

  loginUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/login`, data).pipe(tap((user) => this.currentUser = user));
  }

  // Helpers

  loggedIn(): boolean {
    return !!localStorage.getItem("auth-token");
  }

  getToken() {
    return localStorage.getItem("auth-token");
  }

  logout(): void {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    this.cartService.cartItems = [];
    this.router.navigate(["/auth/login"]);
  }
}
