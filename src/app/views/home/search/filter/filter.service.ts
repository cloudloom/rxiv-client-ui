import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Folder } from '../../../../interface/folder';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  folders: any = [
    { name: "Regional", status: false },
    { name: "Singapore", status: false },
    { name: "Hong Kong", status: false },
    { name: "China", status: false },
    { name: "Malaysia", status: false }
  ];

  files: any = [
    { name: "Data", status: false },
    { name: "Report", status: false },
    { name: "Video", status: false },
    { name: "Image", status: false },
  ];

  brands: any = [
    { name: "Lorem", status: false },
    { name: "Ipsum", status: false },
  ];

  studytypes: any = [
    { name: "Lorem", status: false },
    { name: "Ipsum", status: false },
  ];

  getFolders() : Observable<Folder>{
    const folders = this.folders;
    return of(folders);
  }

  getFiles(): Observable<Folder>{
    const files = this.files;
    return of(files);
  }

  getBrands(): Observable<Folder>{
    const brands = this.brands;
    return of(brands);
  }

  getStudytypes(){
    const studytypes = this.studytypes;
    return of(studytypes);
  }
}
