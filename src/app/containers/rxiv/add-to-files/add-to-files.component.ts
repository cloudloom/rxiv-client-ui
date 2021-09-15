import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-to-files',
  templateUrl: './add-to-files.component.html',
  styleUrls: ['./add-to-files.component.scss']
})
export class AddToFilesComponent implements OnInit {
  modalRef: BsModalRef;
  items: any[];

  constructor(private modalService: BsModalService) {
    this.items = Array(15).fill(0);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-xl modal-dialog-centered' })
    );
    
  }

  ngOnInit(): void {}
}
