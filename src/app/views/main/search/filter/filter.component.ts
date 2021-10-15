import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  
  @Input() searchResults : any = [];
  @Input() selectedCountries : any = [];
  @Input() selectedFileTypes : any = [];
  @Input() selectedBrands : any = [];
  @Input() selectedStudyTypes : any = [];
// selectedCountries : any;

  constructor() { }
  
  // folders: any = [
  //   { name: "Regional", status: false },
  //   { name: "Singapore", status: false },
  //   { name: "Hong Kong", status: false },
  //   { name: "China", status: false },
  //   { name: "Malaysia", status: false }
  // ];

  // files: any = [
  //   { name: "Data", status: false },
  //   { name: "Report", status: false },
  //   { name: "Video", status: false },
  //   { name: "Image", status: false },
  // ];

  // brands: any = [
  //   { name: "Lorem", status: false },
  //   { name: "Ipsum", status: false },
  // ];

  // studytypes: any = [
  //   { name: "Lorem", status: false },
  //   { name: "Ipsum", status: false },
  // ];

  updateTag1(folderindex : number) {

    this.selectedCountries[folderindex].status = !this.selectedCountries[folderindex].status;

  }
  updateTag2(fileindex : number) {

    this.selectedFileTypes[fileindex].status = !this.selectedFileTypes[fileindex].status;

  }
  updateTag3(brandindex : number) {

    this.selectedBrands[brandindex].status = !this.selectedBrands[brandindex].status;

  }
  updateTag4(studyindex : number) {

    this.selectedStudyTypes[studyindex].status = !this.selectedStudyTypes[studyindex].status;

  }

  ngOnInit(): void {
    console.log("fff", this.searchResults);
    // const selectedCountries : any ={};
    // this.searchResults.map(doc=> {
    //   selectedCountries[doc.country.name] = doc.country;
    // })
  }

}
