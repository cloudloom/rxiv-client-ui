import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileInformations } from '../../../interface/profile-informations';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  profileInformations : any = {
    "image": "/assets/img/profiles/l-2.jpg",
    "name": "John Tan",
    "title": "Executive Manager",
    "bio": "I'm on a seafood diet",
    "organisation": "company",
    "team": "team A",
    "location": "Singapore",
    "email": "john@company.com",
    "password": "********",
    "notifications": 2
  }

  getProfileInformations() : Observable<ProfileInformations>{
    const profileInformations= this.profileInformations ;
    return of(profileInformations);
  }
}
