import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-steps',
  templateUrl: './checkout-steps.component.html',
  styleUrls: ['./checkout-steps.component.css']
})
export class CheckoutStepsComponent implements OnInit {

  @Input() step1: boolean;
  @Input() step2: boolean;
  @Input() step3: boolean;
  @Input() step4: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
