import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm | undefined;
  emailModel = '';
  passwordModel = '';

  buttonDisabled = false;
  buttonState = '';
  buttonGooogleState = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.loginForm && !this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';
    // this.authService.signIn(this.loginForm.value).then(user => {
    //   this.router.navigate([environment.adminRoot]);

    // }).catch((error) => {
    //   this.buttonDisabled = false;
    //   this.buttonState = '';
    //   this.notifications.create('Error', error.message,
    //     NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
    // });
  // }

}
}
