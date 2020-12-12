import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/order/order.service';
import { IOrder } from 'src/app/shared/interfaces/order';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$: Observable<IUser>;
  orders$: Observable<IOrder[]>;

  constructor(private userService: UserService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUserById("profile");
    this.orders$ = this.orderService.listMyOrders();
  }

  onSubmit(formData: IUser): void {
    this.user$ = this.userService.updateUserProfile(formData);
  }

}
