import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../shared/interfaces/user';

const httpsOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://localhost:5000/api/users";

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/register`, data, httpsOptions);
  } 

  loginUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/login`, data, httpsOptions);
  }

  // Helpers

  loggedIn(): boolean {
    return !!localStorage.getItem("auth-token")
  }

  getToken() {
    return localStorage.getItem("auth-token");
  }

  logout() {
    localStorage.removeItem("auth-token")
    localStorage.removeItem("cartItems")
    localStorage.removeItem("shippingAddress")
    localStorage.removeItem("paymentMethod")
    this.router.navigate(["/auth/login"]);
  }
}
