import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFilesRoutingModule } from './myfiles.routing';
import { SharedModule } from '../../../shared/shared.module';
import { MyfilesComponent } from './myfiles.component';
import { PinnedComponent } from './pinned/pinned.component';
import { RxivModule} from '../../../containers/rxiv/rxiv.module';
import { ComponentsStateButtonModule } from '../../../components/state-button/components.state-button.module';
import { ComponentsCardsModule } from '../../../components/cards/components.cards.module';
import { RecentfilesComponent } from './recentfiles/recentfiles.component';
import { ComponentsCarouselModule } from '../../../components/carousel/components.carousel.module';
import { DocumentlistComponent } from './documentlist/documentlist.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { TeamActivityComponent } from './team-activity/team-activity.component';
import { BootstrapModule } from '../../../components/bootstrap/bootstrap.module';
import { ActivityModule } from 'src/app/components/activity/activity.module';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { InterestModalComponent } from './interest-modal/interest-modal.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { RxivtileModule } from 'src/app/components/rxivtile/rxivtile.module';
@NgModule({
  declarations: [MyfilesComponent, PinnedComponent, RecentfilesComponent, DocumentlistComponent, RightPanelComponent, TeamActivityComponent, WelcomeModalComponent, InterestModalComponent, SuggestionsComponent],
  imports: [
    CommonModule,
    MyFilesRoutingModule,
    SharedModule,
    ComponentsStateButtonModule,
    ComponentsCardsModule,
    ComponentsCarouselModule,
    NgxDatatableModule,
    BootstrapModule,
    ActivityModule,
    RxivModule,
    BsDropdownModule.forRoot(),
    RxivtileModule
  ]
})
export class MyFilesModule {}
