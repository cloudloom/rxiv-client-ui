import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService : ProfileService) { }

  // profileInformations : any = {
  //   "image": "/assets/img/profiles/l-2.jpg",
  //   "name": "John Tan",
  //   "title": "Executive Manager",
  //   "bio": "I'm on a seafood diet",
  //   "organisation": "company",
  //   "team": "team A",
  //   "location": "Singapore",
  //   "email": "john@company.com",
  //   "password": "********",
  //   "notifications": 2
  // }
  profileInformations : any ;

  getProfileInformations(){
    this.profileService.getProfileInformations().subscribe(profileInformations => this.profileInformations = profileInformations);
  }

  profileInformationtemp = {};

  // notifications = ["Only recieving notifications for files I own", "Recieving notifications for all files", "not recieving any notifications"]
  notifications = [
    {id : 1 , value : "Only recieving notifications for files I own"},
    {id : 2 , value : "Recieving notifications for all files"},
    {id : 3 , value : "not recieving any notifications"}
  ]
  edit = false;
  onEdit() {
    this.edit = true;
    this.profileInformationtemp = { ...this.profileInformations };
  }
  onsubmit() {
    this.profileInformations = { ...this.profileInformationtemp }
    this.edit = false;
  }

  onCancel(){
    this.edit = false;
  }

  getNotificationmessage(value : number):string{
    let messages;
    if(value == 1){
     messages = "Only recieving notifications for files I own";

    }else if(value == 2){
      messages = "Recieving notifications for all files"
    }
    else{
      messages = "not recieving any notifications"
    }
    return messages;
  }
  ngOnInit(): void {
    this.getProfileInformations();
  }

}
