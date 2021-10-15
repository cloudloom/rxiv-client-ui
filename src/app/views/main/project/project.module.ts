import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { PagetitleModule } from 'src/app/shared/component/pagetitle/pagetitle.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ContentModule } from 'src/app/shared/component/content/content.module';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    PagetitleModule,
    ContentModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
