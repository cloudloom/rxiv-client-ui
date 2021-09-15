import { Component, OnInit } from '@angular/core';
import { SearchService} from '../search.service';

@Component({
  selector: 'app-file-information',
  templateUrl: './file-information.component.html',
  styleUrls: ['./file-information.component.scss']
})
export class FileInformationComponent implements OnInit {

  constructor(private searchService :SearchService) { }
  fileInformations : any

  // fileInformations = {
  //   "Title":"COVID-19 Industry Report",
  //   "Image":"../../../../../assets/img/profiles/l-2.jpg",
  //   "Type":"Report",
  //   "Summary":"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document",
  //   "DateCreated":"25 oct 2020",
  //   "LastOpened":"11.25 am,Today",
  //   "LastCommented":"4.20 pm,30 oct 2020",
  //   "Folder":"Regional",
  //   "FileSize":"75 KB",
  //   "Industry":"Lorem Ipsum",
  //   "Brands":"Lorem Ipsum"
  // }

  getFileInformations(){
    this.searchService.getfileInformations().subscribe(fileInformations =>this.fileInformations = fileInformations)
  }

  ngOnInit(): void {
    this.getFileInformations();
  }

}
