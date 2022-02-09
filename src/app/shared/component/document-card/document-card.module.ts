import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentCardComponent } from './document-card.component';
import { RxivAvatarModule } from '../rxiv-avatar/rxiv-avatar.module';



@NgModule({
  declarations: [
    DocumentCardComponent
  ],
  imports: [
    CommonModule,
    RxivAvatarModule
  ],
  exports: [DocumentCardComponent]
})
export class DocumentCardModule { }
