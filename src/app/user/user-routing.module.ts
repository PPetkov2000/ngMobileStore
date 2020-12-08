import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: "user/profile", component: ProfileComponent, canActivate: [AuthGuard] }
];

export const UserRoutingModule = RouterModule.forChild(routes);