import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxivtileComponent } from './rxivtile.component';
import { PagePreviewModule } from '../page-preview/page-preview.module';



@NgModule({
  declarations: [RxivtileComponent],
  imports: [
    CommonModule,
    PagePreviewModule
  ],
  exports: [RxivtileComponent],
})
export class RxivtileModule { }
