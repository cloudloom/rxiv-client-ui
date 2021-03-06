import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/shared/interface/user';
import { UserService } from 'src/app/shared/service/user.service';
import { WelcomeModalComponent} from './welcome-modal/welcome-modal.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  userDetails!: any;

  constructor(private modalService: NgbModal, private userService : UserService) { }


  ngOnInit(){
// this.userService.getUser().subscribe(data => this.userDetails = data);
this.userService.getProfile().subscribe(data => {
  console.log("userdata",data);
  this.userDetails = data;
  if(this.userDetails.setup === false){
    this.modalService.open(WelcomeModalComponent,{ size: 'md',centered: true, keyboard : false , backdrop : 'static' });
  }
})
console.log("user",this.userDetails);
// if(this.userDetails.alreadyViewed === false){
//   this.modalService.open(WelcomeModalComponent,{ size: 'md',centered: true, keyboard : false , backdrop : 'static' });
// }
   
  }
  

}
