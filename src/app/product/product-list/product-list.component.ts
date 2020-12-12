import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() loading: boolean;
  @Input() data: { products: IProduct[], page: number, pages: number };

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

}
