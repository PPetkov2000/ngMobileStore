import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [
    UserListComponent, 
    ProductListComponent, 
    UserEditComponent,
    ProductEditComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    PaginationModule
  ]
})
export class AdminModule { }
