import { Component, Input, OnInit } from '@angular/core';
import { Document } from 'src/app/shared/interface/document';

@Component({
  selector: 'app-file-information',
  templateUrl: './file-information.component.html',
  styleUrls: ['./file-information.component.scss']
})
export class FileInformationComponent implements OnInit {


  @Input() document: Document | undefined;
  constructor() { }


  ngOnInit(): void {
    console.log("fileinfo", this.document)

  }

}
