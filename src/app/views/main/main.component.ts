import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent{

    sidebarActive : boolean = false;
  title = 'angular-pro-sidebar';
  constructor(private router: Router) { }
  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
    // this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    // this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
      return false;
    // return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    // this.sidebarservice.setSidebarState(true);
  }

  //   ngAfterViewInit() {
  //     console.log(this.sidebar.sidenav);
  //   }

  

}
