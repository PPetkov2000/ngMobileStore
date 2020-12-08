import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: "order/:id", component: OrderComponent, canActivate: [AuthGuard] }
];

export const OrderRoutingModule = RouterModule.forChild(routes);