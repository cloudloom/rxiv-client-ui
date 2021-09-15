import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocumentDetails} from '../../../interface/document-details';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  documentDetails = {
    "title" : "Floring Market in Singapore",
    "description" : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "type"  : "Report",
    "pageCount" : 17,
    "publisher" : "Harold Lee",
    "datePublished" : "25 oct 2020",
    "industry" : "Lorem Ipsum",
    "brand" : "Lorem Ipsum",
    "productLine" : "Lorem Ipsum",
    "studyType" :  "Lorem Ipsum",
    "researchType" : "Lorem Ipsum",
    "researchMethod" : "Lorem Ipsum",
    "tags" : "Lorem Ipsum",
    "keywords" : "Lorem Ipsum",
  }

  getDocumentdetails() : Observable<DocumentDetails>{
    const documentDetails = this.documentDetails;
    return of(documentDetails);
  }
}
