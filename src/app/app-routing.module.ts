import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", pathMatch:"full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "search/:keyword", component: HomeComponent },
  { path: "home/page/:pageNumber", component: HomeComponent },
  { path: "search/:keyword/page/:pageNumber", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
