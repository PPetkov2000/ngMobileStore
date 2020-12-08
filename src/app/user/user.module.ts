import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth/auth.guard';
import { FormsModule } from '@angular/forms';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ProductModule
  ],
  providers: [AuthGuard]
})
export class UserModule { }
