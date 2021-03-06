import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CognitoService } from 'src/app/shared/service/cognito.service';
import { UserService } from 'src/app/shared/service/user.service';
import { InterestModalComponent } from '../interest-modal/interest-modal.component'

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss']
})
export class WelcomeModalComponent implements OnInit {

  // @Output() newItemEvent = new EventEmitter();
  details: any;
  userDetails: any;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private userService: UserService, private cognitoService: CognitoService) { }



  getUserDetails() {
    this.userService.getUser().subscribe(data => this.details = data);

  }


  ngOnInit(): void {
    this.cognitoService.onLoginSucess().then((res:any)=>{
      console.log("userdata",res);
      this.userDetails=res;
    })
    this.getUserDetails();
  }

  gotoInterests() {
    this.userService.setWelcomemodalStatus()
    this.activeModal.close('Close click')
    // this.modalService.dismiss(WelcomeModalComponent);
    // this.newItemEvent.emit();
    setTimeout(() => {
      this.modalService.open(InterestModalComponent, { size: 'lg', centered: true, keyboard: false, backdrop: 'static' });
    }, 500)

    console.log("userdata", this.details.alreadyViewed);
  }

}
