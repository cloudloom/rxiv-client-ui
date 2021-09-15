import { Component, OnInit } from '@angular/core';
import { MyfilesService } from '../myfiles.service';

@Component({
  selector: 'app-team-activity',
  templateUrl: './team-activity.component.html',
  styleUrls: ['./team-activity.component.scss']
})
export class TeamActivityComponent implements OnInit {
  constructor(private myfilesService : MyfilesService) {}

  teamActivities: any = [];

  // getActivities() {
  //   const activities = [];

  //   for (let i = 1; i < 6; i++) {
  //     activities.push({
  //       name: 'Harold lee'+i,
  //       message: 'uploaded Hongkong Market',
  //       date: new Date(),
  //       id:i
  //     });
  //   }
  //   return activities;
  // }
  getActivities() : void{
    this.myfilesService.getActivities().subscribe(activities => this.teamActivities = activities);
      }


  ngOnInit(): void {
   this.getActivities();
  }
}
