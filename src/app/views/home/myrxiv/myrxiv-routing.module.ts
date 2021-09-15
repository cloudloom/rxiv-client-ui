import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyrxivComponent } from './myrxiv.component';


const routes: Routes = [
  {
    path: '',
    component: MyrxivComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyrxivRoutingModule { }
