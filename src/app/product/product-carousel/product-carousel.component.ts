import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  topProducts: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getTopProducts().subscribe(response => {
      this.topProducts = response;
    }, error => {
      console.log(error)
    });
  }

}


