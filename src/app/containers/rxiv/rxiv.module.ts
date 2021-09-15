import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFilesComponent} from './add-to-files/add-to-files.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BootstrapModule } from 'src/app/components/bootstrap/bootstrap.module';
import { DocumentFormComponent} from './document-form/document-form.component';
import { FilePreviewComponent} from './file-preview/file-preview.component';
import { PagePreviewModule} from '../../components/page-preview/page-preview.module';
@NgModule({
  declarations: [AddToFilesComponent,DocumentFormComponent,FilePreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BootstrapModule,
    PagePreviewModule
  ],
  exports: [AddToFilesComponent],
})
export class RxivModule { }
