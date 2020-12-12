import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OrderService } from 'src/app/order/order.service';
import { IOrder } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  data: { orders: IOrder[], page: number, pages: number };
  dataSubscription: Subscription;

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSubscription = this.route.params.pipe(
      switchMap((params: Params) => {
        const pageNumber = params.pageNumber || "1";
        return this.orderService.listOrders(pageNumber)
      })
    ).subscribe((response) => {
      this.data = response;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
