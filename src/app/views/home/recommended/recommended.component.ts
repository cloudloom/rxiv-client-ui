import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class RecommendedComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

recommendations :any = [];
createRecommendations(){
  const recommendations = [];
    for(let i = 1 ; i < 13 ; i++){
recommendations.push({
  categary : "Flooring Market",
  title : "Flooring Market in Singapore",
  image :"/assets/img/profiles/l-2.jpg",
  pages : "17 pages",
})
  }
  return recommendations;
}

openModal(template: TemplateRef <any>): void {
  this.modalRef = this.modalService.show(
    template,
    Object.assign({}, { class: 'modal-sm modal-dialog-centered'})
  );
  
}
  ngOnInit(): void {
    this.recommendations = this.createRecommendations();
  }

}
