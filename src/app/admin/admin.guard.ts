import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../shared/interfaces/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    let stream$: Observable<IUser | null>;
    if(this.authService.currentUser === undefined) {
      stream$ = this.userService.getUserById("profile");
    } else {
      stream$ = of(this.authService.currentUser);
    }

    return stream$.pipe(
      map((user) => {
        return user.isAdmin;
      }),
      tap((isAdmin) => {
        if(isAdmin) { return true; }
        const url = this.router.url;
        this.router.navigateByUrl(url);
      })
    );
  }
  
}
