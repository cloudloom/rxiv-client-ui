import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      // {
      //   path: 'projects',
      //   loadChildren: () => import('./project/project.module').then((m) => m.ProjectModule),
      // },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'payment/:id',
        loadChildren: () => import('./payment/payment.module').then((m) => m.PaymentModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
