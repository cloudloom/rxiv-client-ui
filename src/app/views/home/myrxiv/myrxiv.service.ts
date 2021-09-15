import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Collection } from '../../../interface/collection';
import { Pin } from '../.././../interface/pin';

@Injectable({
  providedIn: 'root'
})
export class MyrxivService {

  constructor() { }

  createCollections() : Observable<Collection[]>{
    const collections =[];
    for(let i=1;i<7;i++){
      collections.push({
        "title":"Floring Market In HongKong",
        "image":"/assets/img/profiles/l-2.jpg",
        "lastopened":"10.13 am",
        "items":17
      })
    }
    return of(collections);
  }

  createPinneditems() : Observable<Pin[]> {
    const pinnes = [];
    for (let i = 1; i < 4; i++) {
      pinnes.push({
        title: i % 2 == 0 ? "Flooring Market In Singapore" : "Market Statistics For Brand A",
        read: i % 2 == 0,
        image:"/assets/img/profiles/l-2.jpg",
        items:i %2 == 0 ? "17 pages": "5 pages"
        });
    }
    return of(pinnes);
  }
}
