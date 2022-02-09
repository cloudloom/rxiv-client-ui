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

  documents: any;
  pinnedCountries: any;
  status: boolean = true;
  loading: boolean = true;

  constructor(private documentService: DocumentService) { }

  toggleView() {
    this.status = !this.status;
  }

  ngOnInit(): void {
    this.documentService.getMyLibrary().subscribe(data => {
      this.loading = false;
      this.documents = data;
      console.log("datas", this.documents);
      const pinnedCountries: any = {};
      // const pinnedCountries: any = [];
      // this.documents.map((doc: { country: { name: string | number; }; }) => {
      //   if(doc.country){
      //     pinnedCountries[doc.country.name] = doc.country;

      //   }
      // })
      this.documents.map((doc: any) => {
        // pinnedCountries.push(doc.countries);
        pinnedCountries[doc.countries]= doc.countries;
       
      })
      this.pinnedCountries = Object.values(pinnedCountries);

        // this.pinnedCountries.push(pinnedCountries);

      console.log("Count", this.pinnedCountries);
    })

  }

}
