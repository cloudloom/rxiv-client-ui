import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseModalComponent } from 'src/app/shared/container/purchase-modal/purchase-modal.component';
import { Document } from 'src/app/shared/interface/document';
import { DocumentService } from 'src/app/shared/service/document.service';


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecommendedComponent implements OnInit {

  recommendations: any;
  property!: string;
  direction!: string;
  page = {
    number: 0,
    size: 20,
    totalElements: 0
  }
  loading:boolean=true;

  constructor(private modalService: NgbModal, private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getDocuments(this.property, this.direction, this.page.number).subscribe(data => {
      this.loading=false;
      console.log("data",data)
      this.page = data.page;
      this.recommendations=data._embedded.documents;
      // this.loadingIndicator = false;
    })
  }
    // this.documentService.getRecommentedDocuments().subscribe(data => {
    //   this.recommendations = data;
    // })
  // }

  openModal(selectedFile: Document) {
    const modalRef = this.modalService.open(PurchaseModalComponent, { centered: true, modalDialogClass: 'modal-fullscreen purchase-document-modal' , keyboard : true , backdrop : 'static'});
    modalRef.componentInstance.document = selectedFile;
  }



}
