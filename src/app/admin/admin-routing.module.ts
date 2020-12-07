import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: "admin/userlist", component: UserListComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "admin/userlist/:id/edit", component: UserEditComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "admin/productlist", component: ProductListComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "admin/productlist/:id/edit", component: ProductEditComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "admin/orderlist", component: OrderListComponent, canActivate: [AuthGuard, AdminGuard] }
];

export const AdminRoutingModule = RouterModule.forChild(routes);
