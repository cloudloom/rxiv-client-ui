import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchKey = '';
  user!: User;

  constructor(private router: Router, private userService: UserService) { }


  ngOnInit(): void {


    this.userService.getUser().subscribe(user => this.user = user);
  }

  toggleSidebar() {

  }

  onSignOut(): void {
    // this.authService.signOut().subscribe(() => {
    // this.router.navigate([this.adminRoot]);
    this.router.navigate(["/user"]);
    // });
  }

  gotoProfile() {
    this.router.navigate(["/main/profile"]);
  }

  // searchKeyUp(event: KeyboardEvent): void {
  //   if (event.key === 'Enter') {
  //     this.search();
  //   } else if (event.key === 'Escape') {
  //     const input = document.querySelector('.mobile-view');
  //     if (input && input.classList) {
  //       input.classList.remove('mobile-view');
  //     }
  //     this.searchKey = '';
  //   }
  // }

  // searchAreaClick(event : any): void {
  //   event.stopPropagation();
  // }
  // searchClick(event : any): void {
  //   if (window.innerWidth < 768) {
  //     let elem = event.target;
  //     if (!event.target.classList.contains('search')) {
  //       if (event.target.parentElement.classList.contains('search')) {
  //         elem = event.target.parentElement;
  //       } else if (
  //         event.target.parentElement.parentElement.classList.contains('search')
  //       ) {
  //         elem = event.target.parentElement.parentElement;
  //       }
  //     }

  //     if (elem.classList.contains('mobile-view')) {
  //       this.search();
  //       elem.classList.remove('mobile-view');
  //     } else {
  //       elem.classList.add('mobile-view');
  //     }
  //   } else {
  //     this.search();
  //   }
  //   event.stopPropagation();
  // }

  search(e: any): void {
    if (this.searchKey && this.searchKey.length > 1) {
      this.router.navigate(['main/search'], {
        queryParams: { key: this.searchKey.toLowerCase().trim() },
      });
      this.searchKey = '';
    }
  }

  updateStatus() {
    const activities = []

    // this.activities.map((value) => {
    //   value.read = false;
    // });

  }

}
