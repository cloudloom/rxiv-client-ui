import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

import { getUserRole } from '../utils/util';
import { UserRole } from './auth.roles';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() { }

  user: any;

  // tslint:disable-next-line:typedef
  signIn(credentials: ISignInCredentials) {

    if (credentials.email === "client@gmail.com" && credentials.password === "client") {
      this.user = {
        userName: 'client',
        name: 'Client',
        email: credentials.email,
        role: UserRole.Client,
        alreadyViewed: false
      };
      sessionStorage.setItem("user", JSON.stringify(this.user))

    }

    return new Promise((success, error) => {

      setTimeout(() => {
        if (this.user) {
          success(this.user)
        } else {
          error({ message: "Invalid User" })
        }
      }, 4000)

    })
    // return this.auth
    //   .signInWithEmailAndPassword(credentials.email, credentials.password)
    //   .then(({ user }) => {


    //     console.log(user)
    //     return user;
    //   });
  }

  // tslint:disable-next-line:typedef
  signOut() {
    sessionStorage.removeItem("user");
    return of({})
    //return from(this.auth.signOut());
  }

  // tslint:disable-next-line:typedef
  register(credentials: ICreateCredentials) {
    return null;
    // return this.auth
    //   .createUserWithEmailAndPassword(credentials.email, credentials.password)
    //   .then(async ({ user }) => {
    //     user.updateProfile({
    //       displayName: credentials.displayName,
    //     });
    //     this.auth.updateCurrentUser(user);
    //     return user;
    //   });
  }

  // tslint:disable-next-line:typedef
  sendPasswordEmail(email) {
    return null;
    // return this.auth.sendPasswordResetEmail(email).then(() => {
    //   return true;
    // });
  }

  // tslint:disable-next-line:typedef
  resetPassword(credentials: IPasswordReset) {
    return null;
    // return this.auth
    //   .confirmPasswordReset(credentials.code, credentials.newPassword)
    //   .then((data) => {
    //     return data;
    //   });
  }


  updateViewedStatus() {
    this.user.alreadyViewed = true;
    sessionStorage.setItem("user", JSON.stringify(this.user));
  }

  // tslint:disable-next-line:typedef
  async getUser() {

    if (!this.user && sessionStorage.getItem("user")) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }

    if (!this.user && !sessionStorage.getItem("user")) {
      return null;
    }

    const user = await this.user;

    return user;
    // const u = await this.auth.currentUser;
    // return { ...u, role: getUserRole() };
    // if(u){
    //   return { ...u, role: getUserRole() };
    // }else{
    //   return null;
    // }

  }
}
