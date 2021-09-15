import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PagePreviewModule } from 'src/app/components/page-preview/page-preview.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { BootstrapModule } from 'src/app/components/bootstrap/bootstrap.module';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [PaymentComponent, CreditCardComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    PagePreviewModule,
    SharedModule,
    BootstrapModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() 
  ]
})
export class PaymentModule { }
