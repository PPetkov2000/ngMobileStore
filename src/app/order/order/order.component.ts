import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { IOrder } from 'src/app/shared/interfaces/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy, AfterContentChecked {

  order: IOrder;
  itemsPrice: number;
  paymentMessage: string;
  orderIsPaid: boolean;
  orderSubscription: Subscription;
  orderPaySubscription: Subscription;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private authService: AuthService) { }

  ngOnInit(): void {
    this.orderSubscription = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.orderService.listOrderDetails(params.id)
      })
    ).subscribe((order: IOrder) => {
      this.order = order;
      this.itemsPrice = order.orderItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    });
  }

  ngAfterContentChecked(): void {
    if(this.orderIsPaid) {
      this.orderPaySubscription = this.orderService.listOrderDetails(this.order._id).subscribe((order: IOrder) => {
        this.order = order;
        this.orderIsPaid = false;
      });
    }
  }

  ngOnDestroy() {
    if(this.orderSubscription) {
      this.orderSubscription.unsubscribe();
    }
    if(this.orderPaySubscription) {
      this.orderPaySubscription.unsubscribe();
    }
  }

  payOrderHandler(): void {
    const paymentResult = { 
      id: this.order._id, 
      status: "paid", 
      update_time: Date.now(), 
      email_address: this.authService.currentUser.email 
    };
    this.orderPaySubscription = this.orderService.payOrder(this.order._id, paymentResult).subscribe((order: IOrder) => {
      this.orderIsPaid = true;
      this.paymentMessage = "Payment successfull";
      this.itemsPrice = order.orderItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
      setTimeout(() => {
        this.paymentMessage = null;
      }, 4000);
    });
  }

}
