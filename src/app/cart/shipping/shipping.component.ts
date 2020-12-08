import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingAddress = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {};
  address: string = this.shippingAddress.address;
  city: string = this.shippingAddress.city;
  postalCode: string = this.shippingAddress.postalCode;
  country: string = this.shippingAddress.country;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  shippingSubmit(shippingData: { address: string, city: string, postalCode: string, country: string }): void {
    this.router.navigate(["/payment"]);
    this.shippingAddress = shippingData;
    localStorage.setItem("shippingAddress", JSON.stringify(shippingData));
  }

}
