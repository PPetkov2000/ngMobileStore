import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
  { path: "cart/:id", component: CartComponent, canActivate: [AuthGuard] },
  { path: "shipping", component: ShippingComponent, canActivate: [AuthGuard] },
  { path: "payment", component: PaymentComponent, canActivate: [AuthGuard] },
  { path: "placeorder", component: PlaceorderComponent, canActivate: [AuthGuard] },
];

export const CartRoutingModule = RouterModule.forChild(routes);