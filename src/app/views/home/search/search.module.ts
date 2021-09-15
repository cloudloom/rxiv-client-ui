import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routing';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { FilterComponent } from './filter/filter.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'ngx-contextmenu';
import { BootstrapModule } from '../../../components/bootstrap/bootstrap.module';
import { FileInformationComponent } from './file-information/file-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShareFileComponent } from './share-file/share-file.component';

@NgModule({
  declarations: [SearchComponent, SearchresultsComponent, FilterComponent, FileInformationComponent, ShareFileComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    BsDropdownModule,
    FormsModule,
    BootstrapModule,
    SharedModule,
    ContextMenuModule.forRoot(
      ({
        useBootstrap4: true,
      }),
    )
  ]
})
export class SearchModule { }
