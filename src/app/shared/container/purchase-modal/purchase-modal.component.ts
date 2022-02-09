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

  @Input() document: any;
  showInfo: boolean = false;
  price: any = Math.floor(Math.random() * 100)

  constructor(private router: Router, public activeModal: NgbActiveModal) { }

  datas=[
    {title:"Project Name",key:"projectName",type:"string"},
    {title:"Type",key:"type",type:"string"},
    {title:"Summary",key:"description",type:"string"},
    {title:"Client",key:"client",type:"string"},
    {title:"Date Created",key:"created",type:"string"},
    {title:"CreatedBy",key:"createdBy",type:"string"},
    {title:"Project completion Year",key:"completionYear",type:"string"},
    {title:"Language",key:"language",type:"string"},
    {title:"Industry",key:"industry",type:"string"},
    {title:"Study Method",key:"studyMethod",type:"string"},
    {title:"Folders",key:"folders",type:"multiobj"},
    {title:"Tags",key:"tags",type:"multi"},
    {title:"Countries",key:"countries",type:"multi"},
    {title:"Document Types",key:"documentTypes",type:"multi"},
  ]

  ngOnInit(): void {

    console.log(this.document);
  }
  goToPayment(id: number) {
    this.router.navigate([`app/payment/${id}`]);
    this.activeModal.close('Close click');
  }
  close() {
    this.activeModal.close('Close click');
  }

}
