import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePreviewComponent } from './page-preview.component';



@NgModule({
  declarations: [PagePreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [PagePreviewComponent],
})
export class PagePreviewModule { }
