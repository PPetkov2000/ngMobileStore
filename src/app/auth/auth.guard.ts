import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if(this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/auth/login"], { queryParams: { previousUrl: this.router.url } });
      return false;
    }
  }
  
}
