import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpsOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:5000/api/users";

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, data, httpsOptions);
  } 

  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data, httpsOptions);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem("auth-token")
  }

  getToken() {
    return localStorage.getItem("auth-token");
  }

  logout() {
    return localStorage.removeItem("auth-token")
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
  
  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
