import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from '../cart/cart.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ProductReviewComponent } from './product-review/product-review.component';
import { FormsModule } from '@angular/forms';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductCarouselComponent,
    ProductReviewComponent,
    ProductRatingComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    NgbCarouselModule,
    CartModule,
    PaginationModule,
    SharedModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductCarouselComponent,
    ProductReviewComponent,
    ProductRatingComponent
  ]
})
export class ProductModule { }
