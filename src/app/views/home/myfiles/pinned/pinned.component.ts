import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserRole } from 'src/app/shared/auth.roles';
import { AuthService } from 'src/app/shared/auth.service';
import { MyfilesService } from '../myfiles.service';

@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PinnedComponent implements OnInit {

  constructor(private authService: AuthService,
    private myfileservice: MyfilesService) { }

  files: any = [];

  user: any;

  // message: string;

  // files: [{ name: "Singapore" },
  //   { name: "Malaysia" },
  //   { name: "Hongkong" }];

  activities: any = [];

  // getActivities() {
  //   const activities = [];

  //   for (let i = 1; i < 6; i++) {
  //     activities.push({
  //       name: 'Harold lee' + i,
  //       message: 'uploaded 2 messages in',
  //       market: 'Hongkong Market analysis',
  //       date: new Date(),
  //       id: i,
  //       read: i % 2 == 0,
  //     });
  //   }
  //   return activities;
  // }


  getActivities() : void{
    this.myfileservice.getActivities().subscribe(activities => this.activities = activities);
      }


  updateStatus() {
    const activities = []

    this.activities.map((value) => {
      value.read = false;
    });

  }

  getFiles() : void{
    this.myfileservice.getFiles().subscribe(files => this.files = files);
  }

  async ngOnInit(): Promise<void> {
    await this.authService.getUser().then((user) => {
      this.user = user;
    });
    if (this.user ) {

      this.myfileservice.pinnedCountriesObs.subscribe((countries) => {
        this.files = countries;
      })





      // this.message = "You have no files at the moment.Vist the Recommended tab or view our suggestions below"
    } 

  }

}
