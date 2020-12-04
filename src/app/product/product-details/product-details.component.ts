import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';
import { switchMap } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: IProduct;
  subscription: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.subscription = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getProduct(params.id);
      })
    ).subscribe(product => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCartHandler(): void {
    this.router.navigate(["/cart", this.product._id], { queryParams: { quantity: 1 } });
  }

}
