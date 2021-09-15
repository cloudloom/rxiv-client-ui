import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor() { }
 @Input() teamActivities: any = [];

  // getActivities() {
  //   const activities = [];

  //   for (let i = 1; i < 6; i++) {
  //     activities.push({
  //       name: 'Harold lee'+i,
  //       message: 'uploaded 2 messages in',
  //       market: 'Hongkong Market analysis',
  //       date: new Date(),
  //       id:i
  //     });
  //   }
  //   return activities;
  // }
  
  ngOnInit(): void {
    // this.teamActivities = this.getActivities();
  }

}
