import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../../shared/shared.module';
import { LayoutContainersModule } from '../../containers/layout/layout.containers.module';
// import { MyfilesComponent } from './myfiles/myfiles.component';
import { StarredComponent } from './starred/starred.component';
import { RxivtileModule} from './../../components/rxivtile/rxivtile.module';
import { AuthGuard } from 'src/app/shared/auth.guard';

@NgModule({
  declarations: [BlankPageComponent, HomeComponent, StarredComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    LayoutContainersModule,
    RxivtileModule
  ],
  providers: [AuthGuard]
})
export class HomeModule { }

