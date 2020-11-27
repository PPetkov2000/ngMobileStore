import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response.products;
    });
  }

}
