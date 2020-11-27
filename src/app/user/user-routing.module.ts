import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "user", children: 
    [
      {
        path: "register", component: RegisterComponent, canActivate: [AuthGuard]
      },
      {
        path: "login", component: LoginComponent 
      }
    ] 
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);