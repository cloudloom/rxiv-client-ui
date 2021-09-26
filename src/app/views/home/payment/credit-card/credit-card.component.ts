import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  myDateValue: Date;

  creditcardForm : FormGroup;
  @Input() modalRef: BsModalRef;
  @Output() addCredit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myDateValue = new Date();

    this.creditcardForm = this.fb.group({
      name: ['', Validators.required],
      credit: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],
      billing: ['', Validators.required],
      postCode: ['', Validators.required]
    });

    
  }
  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  closeModal(){

    this.modalRef.hide();

  }

  addCreditInfo(){
    this.addCredit.emit(this.creditcardForm.value);
  }
}
