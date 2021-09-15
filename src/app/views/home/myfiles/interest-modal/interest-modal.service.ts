import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InterestedAreas } from '../../../../interface/interested-areas';
import { InterestedRoles } from '../../../../interface/interested-roles';

@Injectable({
  providedIn: 'root'
})
export class InterestModalService {

  constructor() { }
  createInterestedAreas() : Observable<InterestedAreas[]>{
    const interestedAreas = [];
    for (let i = 1; i < 5; i++) {
      interestedAreas.push({
        name: 'Singapore',
        image: '/assets/img/profiles/flag.png',
        status: false
      })
    }
    return of(interestedAreas);
  }


  createInterestedRoles() : Observable<InterestedRoles[]>{
    const interestedRoles = [];
    for (let i = 1; i < 5; i++) {
      interestedRoles.push({
        role: 'Banking',
        status: false
      })
    }
    return of(interestedRoles);
  }
}
