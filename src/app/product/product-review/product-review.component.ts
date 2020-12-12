import { AfterContentChecked, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { IReview } from 'src/app/shared/interfaces/review';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit, OnDestroy, AfterContentChecked {

  @Input() product: IProduct;
  @Input() productReviewed: boolean;
  @Output() ratingChanged = new EventEmitter<boolean>();
  loading: boolean;
  successMessage: string;
  errorMessage: string;
  productReviewCreated: boolean
  productReviewDeleted: boolean
  productSubscription: Subscription;
  createReviewSubscription: Subscription;
  deleteReviewSubscription: Subscription;

  constructor(private productService: ProductService, public authService: AuthService) { }

  ngOnInit(): void {  
  }

  ngAfterContentChecked(): void {
     if(this.productReviewCreated) {
      this.productSubscription = this.productService.getProduct(this.product._id).subscribe((newProduct) => {
        this.product = newProduct;
        this.productReviewCreated = false;
      });
    }
    if(this.productReviewDeleted) {
      this.productSubscription = this.productService.getProduct(this.product._id).subscribe((newProduct) => {
        this.product = newProduct;
        this.productReviewDeleted = false;
      });
    }
  }

  ngOnDestroy(): void {
    if(this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
    if(this.createReviewSubscription) {
      this.createReviewSubscription.unsubscribe();
    }
    if(this.deleteReviewSubscription) {
      this.deleteReviewSubscription.unsubscribe();
    }
  }

  createReviewHandler(formData: IReview): void {
    this.loading = true;
    this.createReviewSubscription = this.productService.createProductReview(this.product._id, formData).subscribe((response) => {
      this.loading = false;
      this.successMessage = "Review submitted successfully";
      this.productReviewed = !this.productReviewed;
      this.productReviewCreated = true;
      this.ratingChanged.emit(true);
      setTimeout(() => {
        this.successMessage = null;
      }, 4000);
    });
  }

  deleteReviewHandler(reviewId: string): void {
    this.loading = true;
    this.deleteReviewSubscription = this.productService.deleteProductReview(this.product._id, reviewId).subscribe((response) => {
      this.loading = false;
      this.successMessage = "Review removed successfully";
      this.productReviewed = !this.productReviewed;
      this.productReviewDeleted = true;
      this.ratingChanged.emit(true);
      setTimeout(() => {
        this.successMessage = null;
      }, 4000);
    });
  }

}
