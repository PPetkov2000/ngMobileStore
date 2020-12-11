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

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductCarouselComponent,
    ProductReviewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgbCarouselModule,
    CartModule,
    PaginationModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductCarouselComponent
  ]
})
export class ProductModule { }
