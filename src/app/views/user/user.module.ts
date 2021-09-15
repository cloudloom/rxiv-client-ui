import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ComponentsStateButtonModule } from '../../components/state-button/components.state-button.module';
import { GmailSigninComponent } from './gmail-signin/gmail-signin.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, UserComponent, ResetPasswordComponent, GmailSigninComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    ComponentsStateButtonModule
  ]
})
export class UserModule { }
