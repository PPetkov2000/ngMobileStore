import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order/order.service';
import { IOrder } from 'src/app/shared/interfaces/order';
import { IProduct } from 'src/app/shared/interfaces/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  cartItems = JSON.parse(localStorage.getItem("cartItems"));
  shippingAddress = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {};
  paymentMethod = localStorage.getItem("paymentMethod");
  itemsPrice = this.cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
  shippingPrice = this.itemsPrice > 500 ? 0 : 20;
  taxPrice = Number((this.itemsPrice * 0.15).toFixed(2));
  totalPrice = Number((this.itemsPrice + this.shippingPrice + this.taxPrice).toFixed(2));

  constructor(private router: Router, private orderService: OrderService, private cartService: CartService) { }

  ngOnInit(): void {
    if(!this.shippingAddress.address) {
      this.router.navigate(["/shipping"]);
    }
    if(!this.paymentMethod) {
      this.router.navigate(["/payment"]);
    }
  }

  placeOrder(): void {
    this.orderService.createOrder({
      orderItems: this.cartItems.map((item: IProduct) => {
        return { 
          name: item.name, 
          imageUrl: item.images[0], 
          price: item.price, 
          quantity: item.quantity, 
          product: item._id 
        }
      }),
      shippingAddress: this.shippingAddress,
      paymentMethod: this.paymentMethod,
      itemsPrice: this.itemsPrice,
      shippingPrice: this.shippingPrice,
      taxPrice: this.taxPrice,
      totalPrice: this.totalPrice,
    }).subscribe((createdOrder: IOrder) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shippingAddress");
      localStorage.removeItem("paymentMethod");
      this.cartService.cartItems = [];
      this.router.navigate(['/order', `${createdOrder._id}`]);
    });
  }

}
