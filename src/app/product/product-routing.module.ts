import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: "product/:id", component: ProductDetailsComponent }
];

export const ProductRoutingModule = RouterModule.forChild(routes);