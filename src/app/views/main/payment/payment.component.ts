import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CreditCard } from 'src/app/shared/interface/credit-card';
import { Document } from 'src/app/shared/interface/document';
import { DocumentService } from 'src/app/shared/service/document.service';
import { UserService } from 'src/app/shared/service/user.service';
import { CreditCardComponent } from './credit-card/credit-card.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentInfo = [];
  creditCardsInfo : CreditCard[] = [];

  constructor(config: NgbModalConfig, private modalService: NgbModal, private route: ActivatedRoute, private documentService: DocumentService, private userService: UserService,private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  documentDetails!: Document;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.documentService.getDocumentInfo(Number(id)).subscribe(data => {
      this.documentDetails = data;
    })

    this.userService.getUser().subscribe(user => this.creditCardsInfo = user.creditcards)
  }
  addCredit(event: any) {

   
    // this.modalRef.hide();
    // this.paymentInfo.push(event)
  }

  // openModal(template:any): void {
  //   this.modalService.open(template);


  // }
  openModal() {
    this.modalService.open(CreditCardComponent, { size: 'md', centered: true });
  }

  checkout() {
    this.documentService.setMyLibrary(this.documentDetails);
    console.log("doc",this.documentDetails);
    this.router.navigate(["/main/home"]);
  }

}
