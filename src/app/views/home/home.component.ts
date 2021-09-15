import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService, ISidebar } from '../../containers/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  subscription: Subscription;
  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.subscription = this.sidebarService.getSidebar().subscribe(
      res => {
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
