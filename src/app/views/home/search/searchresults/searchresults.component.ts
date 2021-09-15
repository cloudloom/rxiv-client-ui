import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { ContextMenuService } from 'ngx-contextmenu';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {
  fileinfomodalRef: BsModalRef;
  sharefilemodalRef:BsModalRef;
  @ViewChild('fileInfo') fileInfo: TemplateRef<any>;
  @ViewChild('sharefile') sharefile: TemplateRef<any>

  contextmenuitems = [
    "preview", "file information", "duplicate", "download", "share", "add to my files", "add to my rxiv", "add to starred",
    "move to", "rename", "delete"]

  // items = [
  //   { name: 'John', otherProperty: 'Foo' },
  //   { name: 'Joe', otherProperty: 'Bar' }
  // ];
  @ViewChild(ContextMenuComponent, { static: true }) basicMenu: ContextMenuComponent;






  constructor(private contextMenuService: ContextMenuService,
    private modalService: BsModalService,
    private searchService :SearchService) { }
  // gridRadios: string;
  // radiobuttonlists = ["Relevance", "Date created", "Last opened", "Name", "File size"];
  data: any = [];
  // getDatas() {
  //   const data = [];
  //   for (let i = 1; i < 4; i++) {
  //     data.push({
  //       id: 1,
  //       title: 'COVID-19 Industry Report',
  //       page: 'page 9',
  //       date: '02/04/2020',
  //       status: 'ON HOLD',
  //       statusColor: 'primary',
  //       description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',

  //     });
  //   }
  //   return data;
  // }

  getDatas(){
this.searchService.getDatas().subscribe(data => this.data = data);
  }
  
  ngOnInit(): void {
    this.getDatas();

  }
  //  getRadiobutton(): void {
  //   console.log("onSelectNew", this.gridRadios)
  // }


  showMessage(message: any) {
  }


  onContextMenu($event: KeyboardEvent, item: any): void {
    this.contextMenuService.show.next({
      //anchorElement: $event.target,
      event: <any>$event,
      item: item,

    });
    $event.preventDefault();
    $event.stopPropagation();
  }
  openModal(data): void {
    if (data === "file information") {
      this.fileinfomodalRef = this.modalService.show(
        this.fileInfo,
        Object.assign({}, { class: 'modal-md modal-dialog-centered' })
        
      );
      }else if(data === "share"){
      this.sharefilemodalRef = this.modalService.show(
        this.sharefile,
        Object.assign({}, { class: 'modal-md modal-dialog-centered' })
      )
    }

    // console.log(this.fileInfo)
  }

}
