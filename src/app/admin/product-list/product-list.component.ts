import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  message: string;
  loading = true;
  page: number;
  pages: number;

  constructor(public productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        const keyword = params.keyword || "";
        const pageNumber = params.pageNumber || "1";
        return this.productService.getProducts(keyword, pageNumber);
      })
    ).subscribe((response) => {
      this.loading = false;
      this.page = response.page;
      this.pages = response.pages;
    }); 
  }

  deleteHandler(productId: string): void {
    this.loading = true;
    this.productService.deleteProduct(productId).subscribe((response) => {
      const currentPage = this.router.url.split("/")[3];
      this.productService.getProducts("", currentPage).subscribe();
      this.router.navigateByUrl(this.router.url);
      this.loading = false;
      this.message = "Product deleted successfully!";
      setTimeout(() => {
        this.message = null;
      }, 4000);
    });
  }

}
