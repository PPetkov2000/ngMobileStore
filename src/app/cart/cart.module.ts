import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { CheckoutStepsComponent } from './checkout-steps/checkout-steps.component';

@NgModule({
  declarations: [
    CartComponent, 
    ShippingComponent, 
    PaymentComponent, 
    PlaceorderComponent, 
    CheckoutStepsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }
