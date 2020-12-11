import { Component, OnInit } from '@angular/core';
import { IReview } from 'src/app/shared/interfaces/review';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {

  loading: boolean;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  createReviewHandler(formData: IReview): void {
    console.log(formData);
  }

  deleteReviewHandler(): void {

  }

}
