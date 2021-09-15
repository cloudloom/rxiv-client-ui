import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyfilesComponent } from './myfiles.component';
const routes: Routes = [
  {
    path: '',
    component: MyfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFilesRoutingModule {}
