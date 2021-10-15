import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm: NgForm | undefined;
  buttonDisabled = false;
  buttonState = '';

  constructor(private router: Router) { }


  onSubmit(): void {
    if (this.registerForm && (!this.registerForm.valid || this.buttonDisabled  || this.registerForm.value.password !== this.registerForm.value)) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';
    // this.authService.register(this.registerForm.value).then((user) => {
    //   this.router.navigate([environment.adminRoot]);
    // }).catch((error) => {
    //   this.notifications.create('Error', error.message,
    //     NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
    //   this.buttonDisabled = false;
    //   this.buttonState = '';
    // });
  }

  ngOnInit(): void {
  }

}
