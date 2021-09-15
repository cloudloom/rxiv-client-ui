import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserRole } from 'src/app/shared/auth.roles';
import { AuthService } from 'src/app/shared/auth.service';
import { MyfilesService } from '../myfiles.service';

@Component({
  selector: 'app-recentfiles',
  templateUrl: './recentfiles.component.html',
  styleUrls: ['./recentfiles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecentfilesComponent implements OnInit {
  constructor(private authService: AuthService,
    private myfilesService : MyfilesService) { }

  documents: any = [];


  activities: any = [];

  user: any;


  // createDocList() {
  //   const documents = [];
  //   for (let i = 1; i < 4; i++) {
  //     documents.push({
  //       categary: 'Regional',
  //       title: 'COVID-19 Industry report ' + i,
  //       read: i % 2 == 0,
  //       content:
  //         'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'
  //     });
  //   }
  //   return documents;
  // }
  createDocList() : void {
    this.myfilesService.createDocList().subscribe(documents => this.documents = documents);
  }


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
this.myfilesService.getActivities().subscribe(activities => this.activities = activities);
  }

  updateStatus() {
    const activities = []

    this.activities.map((value) => {
      value.read = false;
    });

  }

  async ngOnInit(): Promise<void> {
    await this.authService.getUser().then((user) => {
      this.user = user;
    });
      if (this.user) {
this.documents = [];
      }
    
      
      this.getActivities();
    }
}

