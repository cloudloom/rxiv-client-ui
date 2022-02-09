import { Component, Input, OnInit } from '@angular/core';
import { Document } from 'src/app/shared/interface/document';

@Component({
  selector: 'app-file-information',
  templateUrl: './file-information.component.html',
  styleUrls: ['./file-information.component.scss']
})
export class FileInformationComponent implements OnInit {


  @Input() document: any;
  constructor() { }

  datas=[
    {title:"Project Name",key:"projectName",type:"string"},
    {title:"Type",key:"type",type:"string"},
    {title:"Summary",key:"description",type:"string"},
    {title:"Client",key:"client",type:"string"},
    {title:"Date Created",key:"created",type:"string"},
    {title:"CreatedBy",key:"createdBy",type:"string"},
    {title:"Project completion Year",key:"completionYear",type:"string"},
    {title:"Language",key:"language",type:"string"},
    {title:"Industry",key:"industry",type:"string"},
    {title:"Study Method",key:"studyMethod",type:"string"},
    {title:"Folders",key:"folders",type:"multiobj"},
    {title:"Tags",key:"tags",type:"multi"},
    {title:"Countries",key:"countries",type:"multi"},
    {title:"Document Types",key:"documentTypes",type:"multi"},
  ]


  ngOnInit(): void {
    console.log("fileinfo", this.document)

  }

}
