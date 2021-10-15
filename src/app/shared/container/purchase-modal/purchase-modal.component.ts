import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Document } from 'src/app/shared/interface/document';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PurchaseModalComponent implements OnInit {

  @Input() document: Document | undefined;
  showInfo: boolean = false;

  
  constructor(private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    console.log(this.document);
  }
  goToPayment(id :number) {
    this.router.navigate([`main/payment/${id}`]);
    this.activeModal.close('Close click');
  }
  close(){
    this.activeModal.close('Close click');
  }

}
