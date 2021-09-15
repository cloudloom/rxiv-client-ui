import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-share-file',
  templateUrl: './share-file.component.html',
  styleUrls: ['./share-file.component.scss']
})
export class ShareFileComponent implements OnInit {

  constructor(private searchService :SearchService) { }

  files : any = [];
  // createFiles(){
  //   const files =[];
  //   for(let i=1;i<5;i++)
  //   {
  //     files.push({
  //       "img":"/assets/img/profiles/l-2.jpg",
  //       "name":"Harold Lee"+i,
  //       "email":"harold@company.com",
  //       "role":i % 2 == 0 ? "OWNER" : "EDITOR",
  //     })
  //   }
  //   return files;
  // }

  createFiles(){
this.searchService.createFiles().subscribe(files => this.files = files);
  }

  ngOnInit(): void {
    this. createFiles()
  }

}
