import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FilterComponent } from './filter/filter.component';
import { DocumentCardModule } from 'src/app/shared/component/document-card/document-card.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PagePreviewModule } from 'src/app/shared/component/page-preview/page-preview.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import { FileInformationComponent } from './file-information/file-information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'src/app/shared/component/slider/slider.module';
import { PurchaseModalModule } from 'src/app/shared/container/purchase-modal/purchase-modal.module';




@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    SearchResultsComponent,
    FileInformationComponent,
  
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    DocumentCardModule,
    PagePreviewModule,
    ContextMenuModule.forRoot(),
    NgbModule,
    FormsModule,
    SliderModule,
    PurchaseModalModule
  ]
})
export class SearchModule { }
