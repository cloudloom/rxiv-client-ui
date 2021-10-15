import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PagePreviewModule } from 'src/app/shared/component/page-preview/page-preview.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PaymentComponent,
    CreditCardComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    PaymentRoutingModule,
    PagePreviewModule,
    RouterModule
    
  ]
})
export class PaymentModule { }
