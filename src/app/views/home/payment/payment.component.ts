import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MyfilesService } from '../myfiles/myfiles.service';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  modalRef: BsModalRef;

  paymentInfo : any = [];
  constructor(private modalService: BsModalService,
    private paymentService: PaymentService,private route: ActivatedRoute , private myfilesService : MyfilesService) { }

  documentDetails: any;

  // documentDetails = {
  //   "title" : "Floring Market in Singapore",
  //   "description" : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  //   "type"  : "Report",
  //   "pageCount" : 17,
  //   "publisher" : "Harold Lee",
  //   "datePublished" : "25 oct 2020",
  //   "industry" : "Lorem Ipsum",
  //   "brand" : "Lorem Ipsum",
  //   "productLine" : "Lorem Ipsum",
  //   "studyType" :  "Lorem Ipsum",
  //   "researchType" : "Lorem Ipsum",
  //   "researchMethod" : "Lorem Ipsum",
  //   "tags" : "Lorem Ipsum",
  //   "keywords" : "Lorem Ipsum",
  // }

  getDocumentdetails() {
    this.paymentService.getDocumentdetails().subscribe(documentDetails => this.documentDetails = documentDetails)
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-md modal-dialog-centered' })
    );

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(value => {
      console.log("===>",value.key)

      this.myfilesService.getFileDetails(Number(value.key)).subscribe( data => {

        console.log("DOC DEAILT" , data)
        this.documentDetails = data;
      })


    });
  }

  addCredit(event){
    this.modalRef.hide();
    this.paymentInfo.push(event)
  }

}
