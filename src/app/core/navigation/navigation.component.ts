import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(public authService: AuthService) {}

  logoutHandler(): void {
    this.authService.logout();
  }

  getCartItems(): IProduct[] {
    return localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
  }

}
