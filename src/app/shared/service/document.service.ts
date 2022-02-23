import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Document } from '../interface/document';

import data from '../../data/DocumentData';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }
  private _documentList: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public documentListObs = this._documentList.asObservable();
  private documentList = [];


  myLibrary: Document[] = [];

  getRecommentedDocuments(): Observable<Document[]> {
    return of(data);
  }

  getMyLibrary(): Observable<any> {
    return of(this.myLibrary);
  }

  getDocumentInfo(id: Number): Observable<Document> {

    const selectedDoc = data.find(item => item.id === id);
    if (selectedDoc) {
      return of(selectedDoc);
    } else {
      return of()
    }

  }

  getFilteredDatas(): Observable<Document[]> {
    return of(data);
  }

  // searchFile(key: any): Observable<Document[]> {
  //   const searchresults = data.filter(item => item.title.toLowerCase().includes(key.toLowerCase()) || item.summary.toLowerCase().includes(key.toLowerCase()))
  //   return of(searchresults);
  // }

  searchFile(key: string): Observable<any> {
    let searchResult = [];

    const url = `${environment.apiUrl}/documents/global/search?term=${key}`;
    return this.http.put(url, key
    )
      .pipe(
        map((res: any) => {
          return res;
        })
      );

    return of(searchResult)
  }

  setMyLibrary(documents: Document) {
    this.myLibrary.push(documents);
  }

  getDocuments(property: string = "created", direction: string = "desc", page: number = 0): Observable<any> {
    const url = `${environment.apiUrl}/documents?page=${page}&size=20&sort=${property},${direction}`;
    return this.http.get(url
    )
      .pipe(
        map((res: any) => {
          this._documentList.next(res._embedded.documents);
          return res;
        })
      );



  }

  getDocumentsById(id:any): Observable<any> {
    const url = `${environment.apiUrl}/documents/${id}`;
    return this.http.get(url
    )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getLanguages(): Observable<any> {
    const url = `${environment.apiUrl}/locales `;
    return this.http.get(url
    )
      .pipe(
        map((res: any) => {

          return res;
        })
      );
  }


  updateInterests(interestedData:any): Observable<any> {
    const url = `${environment.apiUrl}/profile`;
    return this.http.put(url,interestedData
    )
      .pipe(
        map((res: any) => {

          return res;
        })
      );
  }

  
}
