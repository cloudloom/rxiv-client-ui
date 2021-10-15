import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interface/user';
import userData from 'src/app/data/UserData';
import { CreditCard } from '../interface/credit-card';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // userInfo :User[] = [];
  // userInfo :User[] = [];
  user!: User;
  constructor() { }

  // private _userDetails: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // public userDetailsObs = this._userDetails.asObservable();

  setUser(userInfo : User) {
    this.user = userInfo;
  }

  getUser(): Observable<User> {
    this.user = userData;
    return of(this.user);
  }

  setCreditCardDetails(creditcardDetails: CreditCard) {
    this.user.creditcards.push(creditcardDetails)
  }
  setWelcomemodalStatus(){
    
    this.user.alreadyViewed = true;

  }

}
