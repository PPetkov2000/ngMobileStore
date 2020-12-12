import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:5000/api/users";

  constructor(private http: HttpClient) { }

  getUsers(pageNumber = ""): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?pageNumber=${pageNumber}`);
  }
  
  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  }

  updateUserProfile(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/profile`, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/${user._id}`, user);
  }

  deleteUser(id: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addToFavourites(productId: string): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/like`, { productId });
  }

  removeFromFavourites(productId: string): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/dislike`, { productId });
  }

}
