import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../shared/auth/guards/auth.guard';
import { NoAuthGuard } from '../shared/auth/guards/noAuth.guard';
import { AuthComponent } from './auth/auth.component';
import { ViewsComponent } from './views.component';

const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

const routes: Routes = [
  // { path: '', redirectTo:'main' },
  {
    path: '',
    redirectTo: adminRoot,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: adminRoot,
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    // data: { roles: [UserRole.Employee] },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'user',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  // {
  //   path: 'main',
  //   loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
