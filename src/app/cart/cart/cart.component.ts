import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/product/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private productService: ProductService,
    public cartService: CartService)
  {  }
    
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        if(params.id) {
          return this.productService.getProduct(params.id)
        }
        this.cartService.setPrice();
        return [null];
      })
    )
    .subscribe((product: IProduct) => {
      if(product) {
        this.addToCartHandler(product);
      }
    });
  }

  addToCartHandler(product: IProduct): void {
    this.cartService.addToCart(product); 
  }

  removeFromCartHandler(id: string): void {
    this.cartService.removeFromCart(id);
  }

  checkoutHandler(): void {
    this.router.navigate(["/shipping"]);
  }
  
}

