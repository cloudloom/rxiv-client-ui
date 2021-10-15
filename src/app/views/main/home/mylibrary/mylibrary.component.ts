import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/interface/country';
import { Document } from 'src/app/shared/interface/document';
import { DocumentService } from 'src/app/shared/service/document.service';

@Component({
  selector: 'app-mylibrary',
  templateUrl: './mylibrary.component.html',
  styleUrls: ['./mylibrary.component.scss']
})
export class MylibraryComponent implements OnInit {

  documents: Document[] = [];
  pinnedCountries: Country[] = [];
  status: boolean = true;

  constructor(private documentService: DocumentService) { }

  toggleView() {
    this.status = !this.status;
  }

  ngOnInit(): void {
    this.documentService.getMyLibrary().subscribe(data => {
      this.documents = data;

      const pinnedCountries: any = {};
      this.documents.map(doc => {
        pinnedCountries[doc.country.name] = doc.country;
      })
      this.pinnedCountries = Object.values(pinnedCountries);
    })

  }

}
