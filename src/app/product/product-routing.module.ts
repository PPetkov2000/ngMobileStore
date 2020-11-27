import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: "product", children: [
      {
        path: ":id", component: ProductDetailsComponent
      },
    ]
  }
];

export const ProductRoutingModule = RouterModule.forChild(routes);