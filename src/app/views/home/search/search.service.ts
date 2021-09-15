import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FileInformations} from '../../../interface/file-informations';
import { Data} from '../../../interface/data';
import { File} from '../../../interface/file';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  fileInformations = {
    "Title":"COVID-19 Industry Report",
    "Image":"../../../../../assets/img/profiles/l-2.jpg",
    "Type":"Report",
    "Summary":"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
    "DateCreated":"25 oct 2020",
    "LastOpened":"11.25 am,Today",
    "LastCommented":"4.20 pm,30 oct 2020",
    "Folder":"Regional",
    "FileSize":"75 KB",
    "Industry":"Lorem Ipsum",
    "Brands":"Lorem Ipsum"
  }

  getfileInformations() : Observable<FileInformations>{
    const fileInformations = this.fileInformations;
    return of(fileInformations);
  }

  getDatas() : Observable<Data[]>{
    const data = [];
    for (let i = 1; i < 4; i++) {
      data.push({
        id: 1,
        title: 'COVID-19 Industry Report',
        page: 'page 9',
        date: '02/04/2020',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',

      });
    }
    return of(data);
  }

  createFiles() : Observable<File[]>{
    const files =[];
    for(let i=1;i<5;i++)
    {
      files.push({
        "img":"/assets/img/profiles/l-2.jpg",
        "name":"Harold Lee"+i,
        "email":"harold@company.com",
        "role":i % 2 == 0 ? "OWNER" : "EDITOR",
      })
    }
    return of(files);
  }
}
