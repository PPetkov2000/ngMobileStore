import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product: IProduct;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.productService.getProduct(this.id).subscribe(product => {
      this.product = product;
    });
  }

}
