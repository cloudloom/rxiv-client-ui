import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbAlertConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContextMenuComponent, ContextMenuService } from 'ngx-contextmenu';
import { FileInformationComponent } from '../file-information/file-information.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [NgbAlertConfig],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsComponent implements OnInit {

  @ViewChild(ContextMenuComponent, { static: true }) public basicMenu!: ContextMenuComponent;
  @Input() searchResults: any = [];
  selectedResultItem: any = {};

  datas: any;
  contextmenuitems = [
    { icon: 'bi bi-eye', name: 'preview' },
    { icon: 'bi bi-info-circle', name: 'file information' },
    { icon: 'bi bi-download', name: 'download' },
    { icon: 'bi bi-trash', name: 'delete' }]

  //   items = [
  //     { name: 'John', otherProperty: 'Foo' },
  //     { name: 'Joe', otherProperty: 'Bar' }
  // ];

  constructor(private contextMenuService: ContextMenuService, private modalService: NgbModal, alertConfig: NgbAlertConfig) { }

  // getDatas() {
  //   const datas = [];
  //   for (let i = 1; i < 3; i++) {
  //     datas.push({
  //       id: 1,
  //       title: 'COVID-19 Industry Report',
  //       page: 'page 9',
  //       date: '02/04/2020',
  //       status: 'ON HOLD',
  //       statusColor: 'primary',
  //       description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  //       logo: i % 3 === 1 ? '/assets/acornlogo.png' : i % 3 === 2 ? '/assets/legologo.png' : '/assets/axalogo.png',
  //     });
  //   }
  //   return datas;
  // }



  ngOnInit(): void {
    //this.datas = this.getDatas();
  }
  onContextMenu($event: any, item: any): void {
    console.log("sdfgf", item)
    this.contextMenuService.show.next({
      // anchorElement: $event.target,
      event: <any>$event,
      item: item,

    });
    $event.preventDefault();
    $event.stopPropagation();
  }

  openModal(data: any, selectedFile: any): void {


    this.selectedResultItem = selectedFile.item;
    console.log("data", data);
    console.log("selectedfile", this.selectedResultItem)

    if (data.name === "file information") {
      const modalRef = this.modalService.open(FileInformationComponent, { size: 'md', centered: true, keyboard: true, backdrop: true });
      modalRef.componentInstance.document = this.selectedResultItem;
    }

    // if (data === "share") {
    //   this.fileinfomodalRef = this.modalService.show(
    //     this.fileInfo,
    //     Object.assign({}, { class: 'modal-md modal-dialog-centered' })

    //   );
    //   }else if(data === "share"){
    //   this.sharefilemodalRef = this.modalService.show(
    //     this.sharefile,
    //     Object.assign({}, { class: 'modal-md modal-dialog-centered' })
    //   )
    // }

    // console.log(this.fileInfo)
  }

  showMessage(message: any) {
    console.log(message);
  }

}
