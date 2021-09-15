import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  myDateValue: Date;
  constructor() { }

  ngOnInit(): void {
    this.myDateValue = new Date();
  }
  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
