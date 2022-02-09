import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseModalComponent } from './purchase-modal.component';
import { PagePreviewModule } from '../../component/page-preview/page-preview.module';



@NgModule({
  declarations: [
    PurchaseModalComponent
  ],
  imports: [
    CommonModule,
    PagePreviewModule
  ],
  exports: [
    PurchaseModalComponent
  ]
})
export class PurchaseModalModule { }
