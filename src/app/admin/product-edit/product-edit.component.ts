import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/product/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product$: Observable<IProduct>;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        this.id = params.id;
        return this.productService.getProduct(params.id);
      })
    );
  }

  editHandler(formData: IProduct): void {
    this.productService.updateProduct({ _id: this.id, ...formData }).subscribe(response => {
      console.log(response)
      this.router.navigateByUrl("/admin/productlist");
    });
  }

}
