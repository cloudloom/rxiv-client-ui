import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { environment } from '../../environments/environment';
import { AuthGuard } from '../shared/auth.guard';
import { UserRole } from '../shared/auth.roles';

const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    redirectTo: adminRoot,
    pathMatch: 'full'
  },
  {
    path: adminRoot,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { roles: [UserRole.Client] },
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: 'error', component: ErrorComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: '/error' }
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: '',
      redirectTo: 'app',
      //component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'app',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'user',
      loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' }
  ];
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
