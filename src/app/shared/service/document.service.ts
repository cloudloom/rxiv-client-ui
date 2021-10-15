import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Document } from '../interface/document';

import data from '../../data/DocumentData';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { }


  myLibrary: Document[] = [];

  getRecommentedDocuments(): Observable<Document[]> {
    return of(data);
  }

  getMyLibrary(): Observable<Document[]> {
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

  searchFile(key: any): Observable<Document[]> {
    const searchresults = data.filter(item => item.title.toLowerCase().includes(key.toLowerCase()) || item.summary.toLowerCase().includes(key.toLowerCase()))
    return of(searchresults);
  }

  setMyLibrary(documents: Document) {
    this.myLibrary.push(documents);
  }
}
