import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RxivAvatarModule } from '../../component/rxiv-avatar/rxiv-avatar.module';
import { LogoutConfirmationComponent } from './logout-confirmation/logout-confirmation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LogoutConfirmationComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
    RxivAvatarModule
  ],
  exports:[HeaderComponent,
    SidebarComponent]
})
export class LayoutModule { }
