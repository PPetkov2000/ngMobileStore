import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductService } from 'src/app/product/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  profileSubscription: Subscription;
  searchSubscription: Subscription;
  mobileMode: boolean;

  constructor(
    public authService: AuthService, 
    private userService: UserService, 
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.authService.loggedIn()) return;
    this.profileSubscription = this.userService.getUserById("profile").subscribe((user) => {
      this.authService.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    if(this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
    if(this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  logoutHandler(): void {
    this.authService.logout();
  }

  getCartItems(): IProduct[] {
    return localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
  }

  searchSubmitHandler(form: NgForm): void {
    const keyword = form.value.search || "";
    this.searchSubscription = this.productService.getProducts(keyword).subscribe();
    this.router.navigate(["/search", keyword]);
    form.reset();
  }

  showMenu(): void {
    this.mobileMode = !this.mobileMode;
  }

}
