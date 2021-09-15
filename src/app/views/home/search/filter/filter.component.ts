import { Component, OnInit } from '@angular/core';
import { FilterService} from '../filter/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private filterService : FilterService) { }
  folders : any;
  // folders: any = [
  //   { name: "Regional", status: false },
  //   { name: "Singapore", status: false },
  //   { name: "Hong Kong", status: false },
  //   { name: "China", status: false },
  //   { name: "Malaysia", status: false }
  // ];

  files : any;
  // files: any = [
  //   { name: "Data", status: false },
  //   { name: "Report", status: false },
  //   { name: "Video", status: false },
  //   { name: "Image", status: false },
  // ];

  brands : any;
  // brands: any = [
  //   { name: "Lorem", status: false },
  //   { name: "Ipsum", status: false },
  //];
  studytypes: any = [
    { name: "Lorem", status: false },
    { name: "Ipsum", status: false },
  ];
  updateTag1(folderindex) {

    this.folders[folderindex].status = !this.folders[folderindex].status;

  }
  updateTag2(fileindex) {

    this.files[fileindex].status = !this.files[fileindex].status;

  }
  updateTag3(brandindex) {

    this.brands[brandindex].status = !this.brands[brandindex].status;

  }
  updateTag4(studyindex) {

    this.studytypes[studyindex].status = !this.studytypes[studyindex].status;

  }

  getFolders(){
this.filterService.getFolders().subscribe(folders => this.folders = folders);
  }

  getFiles(){
    this.filterService.getFiles().subscribe(files => this.files = files);
  }

  getBrands(){
    this.filterService.getBrands().subscribe(brands => this.brands = brands);
  }

  getStudytypes(){
    this.filterService.getStudytypes().subscribe(studytypes => this.studytypes = studytypes);
  }
  
  ngOnInit(): void {
   this.getFolders();
   this.getFiles();
   this.getBrands();
  }
  

}
