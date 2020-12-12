import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { map, switchMap } from "rxjs/operators";
import { UserService } from 'src/app/user/user.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { IReview } from 'src/app/shared/interfaces/review';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy, AfterContentChecked {

  product: IProduct;
  productSubscription: Subscription;
  userSubscription: Subscription;
  addToFavouritesSubscription: Subscription;
  removeFromFavouritesSubscription: Subscription;
  message: string;
  errorMessage: string;
  isProductInFavourites: boolean;
  loadingFavourites: boolean;
  productReviewed: boolean;
  ratingChanged: boolean;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService, 
    private userService: UserService,
    public authService: AuthService
  ) { }
  
  ngOnInit(): void {
    this.productSubscription = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getProduct(params.id);
      })
    ).subscribe(product => {
      this.product = product;
      if(this.authService.currentUser) {
        const productReviewed = product.reviews.find((review: IReview) => review.creator === this.authService.currentUser._id);
        this.productReviewed = !!productReviewed;
      }
    });

    if(!this.authService.loggedIn()) return;

    this.userSubscription = this.userService.getUserById("profile").pipe(
      map((user: any) => {
        return !!user.favouriteProducts.find((p: IProduct) => p._id === this.product?._id);
      })
    ).subscribe((isProductInFavourites) => {
      this.isProductInFavourites = isProductInFavourites;
    });
  }

  ngAfterContentChecked(): void {
    if(this.ratingChanged) {
      this.productSubscription = this.productService.getProduct(this.product._id).subscribe((response) => {
        this.product = response;
        this.ratingChanged = false;
      });
    }
  }

  ngOnDestroy(): void {
    if(this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
    if(this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if(this.addToFavouritesSubscription) {
      this.addToFavouritesSubscription.unsubscribe();
    }
    if(this.removeFromFavouritesSubscription) {
      this.removeFromFavouritesSubscription.unsubscribe();
    }
  }

  addToCartHandler(): void {
    this.router.navigate(["/cart", this.product._id]);
  }

  addToFavouritesHandler(id: string): void {
    this.loadingFavourites = true;
    this.addToFavouritesSubscription = this.userService.addToFavourites(id).subscribe((response) => {
      this.message = "Product added to favourites";
      setTimeout(() => {
        this.message = null;
      }, 4000);
      this.isProductInFavourites = !this.isProductInFavourites;
      this.loadingFavourites = false;
    }, (error) => {
      this.errorMessage = error.error.message;
      setTimeout(() => {
        this.errorMessage = null;
      }, 4000);
    });
  }

  removeFromFavouritesHandler(id: string): void {
    this.loadingFavourites = true;
    this.removeFromFavouritesSubscription = this.userService.removeFromFavourites(id).subscribe((response) => {
      this.message = "Product removed from favourites";
      setTimeout(() => {
        this.message = null;
      }, 4000);
      this.isProductInFavourites = !this.isProductInFavourites;
      this.loadingFavourites = false;
    }, (error) => {
      this.errorMessage = error.error.message;
      setTimeout(() => {
        this.errorMessage = null;
      }, 4000);
    });
  }

  ratingChangeHandler(): void {
    this.ratingChanged = true;
  }

}
