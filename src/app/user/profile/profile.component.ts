import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  user: IUser;
  orders$: Observable<IOrder[]>;

  constructor(private userService: UserService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserById("profile")
      .subscribe(
        (response) => {
          this.user = response;
        },
        (error) => {
          if(error instanceof HttpErrorResponse) {
            if(error.status === 401) {
              this.router.navigate(["/auth/login"]);
            }
          }
        }
      );
    this.orders$ = this.orderService.listMyOrders();
  }

  onSubmit(formData: IUser) {
    this.userService.updateUserProfile(formData).subscribe((response) => {
      this.user = response;
    }, error => {
      console.log(error);
    });
  }

}
