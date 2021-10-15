import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentCardComponent } from './document-card.component';



@NgModule({
  declarations: [
    DocumentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DocumentCardComponent]
})
export class DocumentCardModule { }
