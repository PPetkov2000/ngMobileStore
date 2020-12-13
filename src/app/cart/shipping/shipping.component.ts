import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingAddress = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {};

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    if(this.cartService.cartItems && this.cartService.cartItems.length === 0) {
      this.router.navigate(["/cart"]);
    }
  }

  shippingSubmit(shippingData: { address: string, city: string, postalCode: string, country: string }): void {
    this.router.navigate(["/payment"]);
    this.shippingAddress = shippingData;
    localStorage.setItem("shippingAddress", JSON.stringify(shippingData));
  }

}
