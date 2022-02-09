import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CognitoService } from 'src/app/shared/service/cognito.service';

@Component({
  selector: 'app-logout-confirmation',
  templateUrl: './logout-confirmation.component.html',
  styleUrls: ['./logout-confirmation.component.scss']
})
export class LogoutConfirmationComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private cognitoService: CognitoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Logout(){
    this.cognitoService.onLogout().subscribe(() => {
    this.router.navigate(["/user"]);
    this.activeModal.close('Close click');
    });
  }
}
