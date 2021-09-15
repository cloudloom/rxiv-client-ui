import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendedRoutingModule } from './recommended-routing.module';
import { RecommendedComponent } from './recommended.component';
import { RxivModule } from 'src/app/containers/rxiv/rxiv.module';
import { PagePreviewModule } from 'src/app/components/page-preview/page-preview.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RxivtileModule } from 'src/app/components/rxivtile/rxivtile.module';


@NgModule({
  declarations: [RecommendedComponent],
  imports: [
    CommonModule,
    RecommendedRoutingModule,
    RxivModule,
    PagePreviewModule,
    SharedModule,
    RxivtileModule 
  ]
})
export class RecommendedModule { }
