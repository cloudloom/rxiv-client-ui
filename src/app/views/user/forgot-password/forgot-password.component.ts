import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  @ViewChild('passwordForm') passwordForm: NgForm | undefined;
  buttonDisabled = false;
  buttonState = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.passwordForm && !this.passwordForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

    // this.authService.sendPasswordEmail(this.passwordForm.value.email).then(() => {
    //   this.notifications.create('Done', 'Password reset email is sent, you will be redirected to Reset Password page!',
    //     NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: true });
    //   this.buttonDisabled = false;
    //   this.buttonState = '';
    //   setTimeout(() => {
    //     this.router.navigate(['user/reset-password']);
    //   }, 6000);

    // }).catch((error) => {
    //   this.notifications.create('Error', error.message,
    //     NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
    //   this.buttonDisabled = false;
    //   this.buttonState = '';
    // });
  }
}
