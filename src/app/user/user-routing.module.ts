import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "user", children: 
    [
      {
        path: "register", component: RegisterComponent 
      },
      {
        path: "login", component: LoginComponent 
      }
    ] 
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);