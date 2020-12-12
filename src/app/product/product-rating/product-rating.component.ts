import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {

  @Input() text: string;
  @Input() rating: number;

  constructor() { }

  ngOnInit(): void {
  }

}
