import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseModalComponent } from 'src/app/shared/container/purchase-modal/purchase-modal.component';
import { Country } from 'src/app/shared/interface/country';
import { Document } from 'src/app/shared/interface/document';
import { DocumentService } from 'src/app/shared/service/document.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  recommendations: any;
  gridRadios: any;
  searchkey: any;
  searchResults: Document[] | undefined;
  documents: Document[] = [];
  selectedCountries: Country[] = [];
  selectedFileTypes: any;
  selectedBrands: any;
  selectedStudyTypes: any;


  constructor(private route: ActivatedRoute, private documentService: DocumentService,private modalService: NgbModal) { }

  createRecommendationList() {
    const recommendations = [];
    for (let i = 1; i < 4; i++) {
      recommendations.push({
        categary: 'Regional',
        title: i % 3 === 1 ? 'How COVID affected Asia...' : i % 3 === 2 ? 'Should I wear mask?' : 'Nation-wide disaster: Expert ...',
        heading: +i + ' Executive summary',
        img: '/assets/profile-1.png',
        content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        author: i % 3 === 1 ? 'ACORN Marketing & Research Consultant Pte Ltd' : i % 3 === 2 ? 'The Lego Group' : 'AXA Insurance',
        date: i % 3 === 1 ? '29 September 2021' : i % 3 === 2 ? '20 August 2021' : '25 July 2021',
      });
    }
    return recommendations;
  }


  radiobuttonlists = ["Relevance", "Date created", "Last opened", "Name", "File size"];

  getRadiobutton() {

  }

  ngOnInit(): void {
    // console.log((this.route.snapshot.queryParams.key));
    this.recommendations = this.createRecommendationList()
    this.route.queryParams.subscribe(value => {
      this.searchkey = value.key;
      this.documentService.searchFile(this.searchkey).subscribe(data => {
        this.searchResults = data;
        const selectedCountries: any = {};
        const selectedFileTypes: any = {};
        const selectedBrands: any = {};
        const selectedStudyTypes: any = {};
        this.searchResults.map(doc => {
          selectedCountries[doc.country.name] = doc.country;
          selectedFileTypes[doc.type] = {name : doc.type , status : false};
          selectedBrands[doc.brand] = {name : doc.brand , status : false};
          selectedStudyTypes[doc.studyType] = {name : doc.studyType , status : false};
        })
        this.selectedCountries = Object.values(selectedCountries);
        this.selectedFileTypes = Object.values(selectedFileTypes);
        this.selectedBrands = Object.values(selectedBrands);
        this.selectedStudyTypes = Object.values(selectedStudyTypes);
      })
      console.log("results", this.selectedFileTypes)
    });


    // this.documentService.getFilteredDatas().subscribe(data => {
    //   this.documents = data;
    //   const selectedCountries: any = {};
    //   const selectedFileTypes: any = {};
    //   const selectedBrands: any = {};
    //   const selectedStudyTypes: any = {};
    //   this.documents.map(doc => {
    //     selectedCountries[doc.country.name] = doc.country;
    //     selectedFileTypes[doc.type] = doc.type;
    //     selectedBrands[doc.brand] = doc.brand;
    //     selectedStudyTypes[doc.studyType] = doc.studyType;
    //   })
    //   this.selectedCountries = Object.values(selectedCountries);
    //   this.selectedFileTypes = Object.values(selectedFileTypes);
    //   this.selectedBrands = Object.values(selectedBrands);
    //   this.selectedStudyTypes = Object.values(selectedStudyTypes);
    // })
    console.log("eeee", this.selectedCountries);
    console.log("fff", this.selectedFileTypes);
  }
  openModal(selectedFile: Document){
    const modalRef = this.modalService.open(PurchaseModalComponent, { centered: true, modalDialogClass: 'modal-fullscreen purchase-document-modal' , keyboard : true , backdrop : 'static'});
    modalRef.componentInstance.document = selectedFile;
  }

}
