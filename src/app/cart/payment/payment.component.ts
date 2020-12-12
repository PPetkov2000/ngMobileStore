import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  shippingAddress = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {};
  paymentMethod: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!this.shippingAddress.address) {
      this.router.navigate(["/shipping"]);
    }
  }

  paymentSubmit(formdata: { paymentMethod: string }): void {
    if(formdata.paymentMethod) {
      this.router.navigate(["/placeorder"]);
      localStorage.setItem("paymentMethod", formdata.paymentMethod);
    }
  }

}
