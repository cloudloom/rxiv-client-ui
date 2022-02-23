import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CreditCard } from 'src/app/shared/interface/credit-card';
import { Document } from 'src/app/shared/interface/document';
import { DocumentService } from 'src/app/shared/service/document.service';
import { PaymentService } from 'src/app/shared/service/payment.service';
import { ToastService } from 'src/app/shared/service/toast.service';
import { UserService } from 'src/app/shared/service/user.service';
import { CreditCardComponent } from './credit-card/credit-card.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  [x: string]: any;

  @ViewChild('cardInfo')
  cardInfo!: ElementRef;
  paymentInfo = [];
  creditCardsInfo: CreditCard[] = [];
  _totalAmount: number | undefined;
  card: any;
  cardHandler = this.onChange.bind(this);
  cardError!: any;
  documentDetails!: any;
  loading: boolean = true;
  status: boolean = false;



  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private route: ActivatedRoute, private documentService: DocumentService,
    private userService: UserService, private router: Router,
    private paymentService: PaymentService, private toastService: ToastService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  datas = [
    { title: "Project Name", key: "projectName", type: "string" },
    { title: "Type", key: "type", type: "string" },
    { title: "Summary", key: "description", type: "string" },
    { title: "Client", key: "client", type: "string" },
    { title: "Date Created", key: "created", type: "string" },
    { title: "CreatedBy", key: "createdBy", type: "string" },
    { title: "Project completion Year", key: "completionYear", type: "string" },
    { title: "Language", key: "language", type: "string" },
    { title: "Industry", key: "industry", type: "string" },
    { title: "Study Method", key: "studyMethod", type: "string" },
    { title: "Folders", key: "folders", type: "multiobj" },
    { title: "Tags", key: "tags", type: "multi" },
    { title: "Countries", key: "countries", type: "multi" },
    { title: "Document Types", key: "documentTypes", type: "multi" },
  ]

  // condition = new FormControl('', [Validators.required]);
  ngOnDestroy() {
    if (this.card) {
      // We remove event listener here to keep memory clean
      this.card.removeEventListener('change', this.cardHandler);
      this.card.destroy();
    }
  }

  ngAfterViewInit() {
    this.initiateCardElement();
  }

  initiateCardElement() {
    // Giving a base style here, but most of the style is in scss file

    const cardStyle = {
      // hidePostalCode: true,
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.card = elements.create('card', { hidePostalCode: true, cardStyle });
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
  }

  onChange({ error }: any) {
    if (error) {
      this.cardError = error.message;
    } else {
      this.cardError = null;
    }
    this.cd?.detectChanges();
  }

  async createStripeToken() {
    const { token, error } = await stripe.createToken(this.card);

    console.log("SUCCREE", token, error)
    // this.toastService.show('Error' , error.message);
    if (token) {
      this.onSuccess(token);
    } else {
      this.onError(error);
    }
  }

  onSuccess(token: any) {
    this.paymentService.doPayment(this.documentDetails.id, token.id).subscribe(res => {

      console.log("RES", res)
      
        this.toastService.show(`document ${this.documentDetails.name} purchased successfully`)
        this.router.navigate(["/app/home"]);
      
      // if (res && res.id) {
      //   if (this.card) {
      //     this.card.clear();
      //   }

      //   setTimeout(() => {
      //     this.buttonState = '';
      //     this.paymentSuccess = true;
      //     this.showPayment = false;
      //   }, 1000);
      // }
    }, (err) => {
      this.toastService.show(err.message);
      // this.buttonState = '';
      // this.globalService.showAlert.next({
      //   'type': 'Error',
      //   'content': 'Payment Failed , Please Try Again.'
      // });
      // this.payButtonDisable = false;
      // this.showPayment = true;
    });
    // this.dialogRef.close({ token });
  }
  onError(error: any) {
    this.toastService.show(error.message);
    // this.toastService.show(error);
    // if (error.message) {
    //   this.cardError = error.message;
    // }
  }



  ngOnInit(): void {

   
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.paramMap.get('id')
    this.documentService.getDocumentsById(id).subscribe(data => {
      this.loading = false;
      console.log("data", data);
      this.documentDetails = data;
    })
    // this.documentService.getDocumentInfo(Number(id)).subscribe(data => {
    //   this.documentDetails = data;
    // })

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
    console.log("doc", this.documentDetails);
    this.router.navigate(["/app/home"]);
  }

  // checkout(){

  // }
  checkCheckBoxvalue(value: any) {
    console.log("value", value.target.checked);
    if (value.target.checked === true) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
  cancel() {
    this.router.navigate(["/app/home"]);
  }

}
