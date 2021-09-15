import { Component, OnInit } from '@angular/core';
import { MyrxivService } from '../myrxiv.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(private myrxivService : MyrxivService) { }
collections : any =[];

// createCollections(){
//   const collections =[];
//   for(let i=1;i<7;i++){
//     collections.push({
//       "title":"Floring Market In HongKong",
//       "image":"/assets/img/profiles/l-2.jpg",
//       "lastopened":"10.13 am",
//       "items":17
//     })
//   }
//   return collections;
// }
createCollections(){
  this.myrxivService.createCollections().subscribe(collections => this.collections = collections);
}

  ngOnInit(): void {
  this.createCollections();
  }

}
