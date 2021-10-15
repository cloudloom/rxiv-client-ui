import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/shared/container/layout/layout.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, LayoutModule, ReactiveFormsModule],
})
export class MainModule {}
