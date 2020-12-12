import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    if(this.productService.topProducts === undefined) {
      this.productService.getTopProducts().subscribe();
    }
  }

}


