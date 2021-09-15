import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Activity} from '../../../interface/activity';
import { Document} from '../../../interface/document';
import { Files} from '../../../interface/files';
import { TabularData} from '../../../interface/tabular-data';
import { Details } from '../../../interface/details';


@Injectable({
  providedIn: 'root'
})
export class MyfilesService {

  constructor() { }
  // pinnedCountries: any = [];
  //suggestions : any = [];

  

  private _pinnedCountries: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public pinnedCountriesObs = this._pinnedCountries.asObservable();


  setCountries(countries) {
    this._pinnedCountries.next(countries)
    //this.pinnedCountries = countries;
  }
  // getCountries() {
  //   return this.pinnedCountries;
  // }

private _suggestions: BehaviorSubject<any> = new BehaviorSubject<any>([]);
public suggestionsObs = this._suggestions.asObservable();


getSuggestions(): any{
  const suggestions = [];
  for(let i = 1 ; i < 13 ; i++){
    suggestions.push({
      categary : "Flooring Market",
      title : "Flooring Market in Singapore",
      image :"/assets/img/profiles/l-2.jpg",
      pages : "17 pages",
    })
  }
  return suggestions;
  console.log("suggestions",suggestions);
}
setSuggestions():void{
  let suggestions = this.getSuggestions();
  this._suggestions.next(suggestions);
}


getActivities() :Observable<Activity[]>{
  const activities = [];

  for (let i = 1; i < 6; i++) {
    activities.push({
      name: 'Harold lee' + i,
      message: 'uploaded 2 messages in',
      market: 'Hongkong Market analysis',
      date: new Date(),
      id: i,
      read: i % 2 == 0,
    });
  }
  return of(activities);
}

createDocList() :Observable<Document[]>{
  const documents = [];
  for (let i = 1; i < 4; i++) {
    documents.push({
      categary: 'Regional',
      title: 'COVID-19 Industry report ' + i,
      read: i % 2 == 0,
      content:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'
    });
  }
  return of(documents);
}

getFiles() :Observable<Files[]>{
  const files = [{ name: 'Singapore' }, { name: 'Malaysia' }, { name: 'Hongkong' }];
  return of(files );
}

createTabularItems() : Observable<TabularData[]> {
  const datas = [];
  for (let i = 1; i < 7; i++) {
    datas.push({
      name: 'John',
      lastOpened: '11.40',
      lasCommented: '10.00 am',
      create: new Date,
      owner: 'JOHN',
      tags: 'Covid-19 industry report',
      updated: new Date
    });
  }
  return of(datas);
}

getDetails() : Observable<Details> {
  // const details = [];
 const details = {
    title: "Welcome to RXIV",
    img: "/assets/img/profiles/l-2.jpg",
    name: "Thomas",
    content: "Before you get started,we'd like to know more about your research interests.",
  };
  return of(details);
}

}
