import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../product/product.service';
import { IProduct } from '../shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showTopProducts = true;
  loading = true;
  data: { products: IProduct[], page: number, pages: number };

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        const keyword = params.keyword;
        const pageNumber = params.pageNumber || "1";
        if(keyword) {
          this.showTopProducts = false;
        }
        return this.productService.getProducts(keyword, pageNumber)
      })
    )
    .subscribe((response) => {
      this.loading = false;
      this.data = response;
    });
  }

}
