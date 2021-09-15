import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
// import { MyfilesComponent } from './myfiles/myfiles.component';
import { StarredComponent } from './starred/starred.component';
import { UserRole } from 'src/app/shared/auth.roles';
import { AuthGuard } from 'src/app/shared/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'myfiles' },
      //   { path: 'myfiles', component: MyfilesComponent },
      {
        path: 'myrxiv',
        loadChildren: () => import('./myrxiv/myrxiv.module').then(m => m.MyrxivModule),
        data: { roles: [UserRole.Client] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        data: { roles: [UserRole.Client] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'myfiles',
        loadChildren: () => import('./myfiles/myfiles.module').then(m => m.MyFilesModule),
        data: { roles: [UserRole.Client] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
        data: { roles: [UserRole.Client] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'recommended',
        loadChildren: () => import('./recommended/recommended.module').then(m => m.RecommendedModule),
        data: { roles: [UserRole.Client] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      
      {
        path: 'recent',
        loadChildren: () => import('./recent/recent.module').then(m => m.RecentModule),
        data: { roles: [UserRole.Client] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'trash',
        loadChildren: () => import('./trash/trash.module').then(m => m.TrashModule),
        data: { roles: [UserRole.Client] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
        data: { roles: [UserRole.Client] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      { path: 'starred', component: StarredComponent },
      { path: 'blank-page', component: BlankPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
