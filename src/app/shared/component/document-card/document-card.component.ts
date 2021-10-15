import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent implements OnInit {


  @Input() categary :any;
  @Input() title :any;
  @Input() image :any;
  @Input() heading :any;
  @Input() content :any;


  constructor() { }

  ngOnInit(): void {
  }

}
