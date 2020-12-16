import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: "", canActivate: [AuthGuard, AdminGuard], children: [
      { path: "userlist", children: [
          { path: "", component: UserListComponent },
          { path: ":pageNumber", component: UserListComponent },
          { path: ":id/edit", component: UserEditComponent }
        ]
      },
      { path: "productlist", children: [
          { path: "", component: ProductListComponent },
          { path: ":pageNumber", component: ProductListComponent },
          { path: ":id/edit", component: ProductEditComponent }
        ]
      },
      { path: "orderlist", children: [
          { path: "", component: OrderListComponent },
          { path: ":pageNumber", component: OrderListComponent }
        ]
      }
    ]
  }
];

export const AdminRoutingModule = RouterModule.forChild(routes);
