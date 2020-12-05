import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedReq = req.clone({
      setHeaders: { Authorization: `Bearer ${this.authService.getToken()}` }
    });
    return next.handle(tokenizedReq);
  }
}
