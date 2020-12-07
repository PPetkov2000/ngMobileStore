import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<IProduct[]>
  message: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  deleteHandler(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(response => {
      this.products$ = this.productService.getProducts();
      this.message = "Product deleted successfully!";
      setTimeout(() => {
        this.message = null;
      }, 4000);
    });
  }

}
