import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/service/user.service';



@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  // myDateValue: Date | undefined;
  creditcardForm!: FormGroup;
  @Output() addCredit = new EventEmitter<any>();
  paymentInfo :any;

  constructor(private fb: FormBuilder,public activeModal: NgbActiveModal, private userService:UserService) { }

  ngOnInit(): void {
    // this.myDateValue = new Date();

    this.creditcardForm = this.fb.group({
      name: ['', Validators.required],
      creditCardNo: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],
      billing: ['', Validators.required],
      postCode: ['', Validators.required]
    });

  }
  addCreditInfo(){
    
    if(this.creditcardForm){
    // this.addCredit.emit(this.creditcardForm.value);
    console.log("credit values",this.creditcardForm.value)
this.userService.setCreditCardDetails(this.creditcardForm.value)
this.activeModal.close('Close click')
// this.userService.setUserDetails(this.creditcardForm.value)
    }
  }

  closeModal(){
    this.activeModal.close('Close click')
  }

}
