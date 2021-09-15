import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyrxivRoutingModule } from './myrxiv-routing.module';
import { MyrxivComponent } from './myrxiv.component';
import { MyrxivPinnedComponent } from './myrxiv-pinned/myrxiv-pinned.component';
import { CollectionsComponent } from './collections/collections.component';
import { RxivModule } from 'src/app/containers/rxiv/rxiv.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { PagePreviewModule } from 'src/app/components/page-preview/page-preview.module';
import { RxivtileModule } from 'src/app/components/rxivtile/rxivtile.module';


@NgModule({
  declarations: [MyrxivComponent, MyrxivPinnedComponent, CollectionsComponent],
  imports: [
    CommonModule,
    MyrxivRoutingModule,
    RxivModule,
    SharedModule,
    ComponentsCarouselModule,
    PagePreviewModule,
    RxivtileModule
  ]
})
export class MyrxivModule { }
