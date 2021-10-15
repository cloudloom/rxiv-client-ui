import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { InterestModalComponent } from './interest-modal/interest-modal.component';
import { DocumentCardModule } from 'src/app/shared/component/document-card/document-card.module';
import { SliderModule } from 'src/app/shared/component/slider/slider.module';




@NgModule({
  declarations: [
    HomeComponent,
    RecommendedComponent,
    MylibraryComponent,
    RecommendedComponent,
    WelcomeModalComponent,
    InterestModalComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    DocumentCardModule,
    SliderModule
  ]
})
export class HomeModule { }
