import { Injectable } from '@angular/core';
import { IProduct } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IProduct[] = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
  subtotal: string | number;
 
  constructor() { }

  addToCart(product: IProduct): void {
    const currentItemIndex = this.cartItems.findIndex(item => item._id === product._id);
    if(currentItemIndex < 0) {
      this.cartItems = [...this.cartItems, product];
    } else {
      const itemToUpdate = this.cartItems[currentItemIndex];
      itemToUpdate.quantity = product.quantity;
      this.cartItems[currentItemIndex] = itemToUpdate;
    }
    this.addToLocalStorage();
    this.setPrice();
  }

  removeFromCart(id: string): void {
    this.cartItems = this.cartItems.filter(item => item._id !== id);
    this.addToLocalStorage();
    this.setPrice();
  }

  setPrice(): void {
    this.subtotal = this.cartItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  }

  addToLocalStorage(): void {
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }
  
}
