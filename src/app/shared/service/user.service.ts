import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interface/user';
import userData from 'src/app/data/UserData';
import { CreditCard } from '../interface/credit-card';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // userInfo :User[] = [];
  // userInfo :User[] = [];
  user!: User;
  constructor(private http: HttpClient) { }

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

  getProfile(): Observable<any> {
    const url = `${environment.apiUrl}/profile`;
    return this.http.get(url
    )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getMyLibrary(): Observable<any> {
    const url = `${environment.apiUrl}/documents/paid/all`;
    return this.http.get(url
    )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

}
