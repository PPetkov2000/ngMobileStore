import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductService } from 'src/app/product/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    public authService: AuthService, 
    private userService: UserService, 
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.userService.getUserById("profile").subscribe((user) => {
      this.authService.currentUser = user;
    });
  }

  logoutHandler(): void {
    this.authService.logout();
  }

  getCartItems(): IProduct[] {
    return localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
  }

  searchSubmitHandler(form: NgForm): void {
    const keyword = form.value.search;
    this.productService.getProducts(keyword || "").subscribe();
    form.reset();
  }

}
