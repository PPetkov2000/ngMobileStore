import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { map, switchMap } from "rxjs/operators";
import { UserService } from 'src/app/user/user.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  product: IProduct;
  productSubscription: Subscription;
  userSubscription: Subscription;
  message: string;
  errorMessage: string;
  isProductInFavourites: boolean;
  loading: boolean;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService, 
    private userService: UserService
  ) { }
  
  ngOnInit(): void {
    this.productSubscription = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getProduct(params.id);
      })
    ).subscribe(product => {
      this.product = product;
    });
    this.userSubscription = this.userService.getUserById("profile").pipe(
      map((user: any) => {
        return !!user.favouriteProducts.find((p: IProduct) => p._id === this.product._id);
      })
    ).subscribe((isProductInFavourites) => {
      this.isProductInFavourites = isProductInFavourites;
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  addToCartHandler(): void {
    this.router.navigate(["/cart", this.product._id]);
  }

  addToFavouritesHandler(id: string): void {
    this.loading = true;
    this.userService.addToFavourites(id).subscribe((response) => {
      this.message = "Product added to favourites";
      setTimeout(() => {
        this.message = null;
      }, 4000);
      this.isProductInFavourites = !this.isProductInFavourites;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error.error.message;
      setTimeout(() => {
        this.errorMessage = null;
      }, 4000);
    });
  }

  removeFromFavouritesHandler(id: string): void {
    this.loading = true;
    this.userService.removeFromFavourites(id).subscribe((response) => {
      this.message = "Product removed from favourites";
      setTimeout(() => {
        this.message = null;
      }, 4000);
      this.isProductInFavourites = !this.isProductInFavourites;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error.error.message;
      setTimeout(() => {
        this.errorMessage = null;
      }, 4000);
    });
  }

}
