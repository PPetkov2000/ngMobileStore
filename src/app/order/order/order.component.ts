import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IOrder } from 'src/app/shared/interfaces/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: IOrder;
  itemsPrice: number;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.orderService.listOrderDetails(params.id)
      })
    ).subscribe(order => {
      this.order = order;
      this.itemsPrice = order.orderItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    });
  }

}
