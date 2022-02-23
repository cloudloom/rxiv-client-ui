import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent implements OnInit {

  @Input() item: any;
  @Input() status!: boolean;
  // @Input() categary: any;
  // @Input() title: any;
  // @Input() image: any;
  // @Input() heading: any;
  // @Input() content: any;
  @Output() openModal = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenModal(item: any) {
    this.openModal.emit(item);
  }

}
