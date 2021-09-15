import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyrxivService } from '../myrxiv.service';

@Component({
  selector: 'app-myrxiv-pinned',
  templateUrl: './myrxiv-pinned.component.html',
  styleUrls: ['./myrxiv-pinned.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MyrxivPinnedComponent implements OnInit {

  constructor(private myrxivService : MyrxivService) { }
  pinnes: any = [];

  // createPinneditems() {
  //   const pinnes = [];
  //   for (let i = 1; i < 4; i++) {
  //     pinnes.push({
  //       title: i % 2 == 0 ? "Flooring Market In Singapore" : "Market Statistics For Brand A",
  //       read: i % 2 == 0,
  //       image:"/assets/img/profiles/l-2.jpg",
  //       items:i %2 == 0 ? "17 pages": "5 pages"
  //       });
  //   }
  //   return pinnes;
  // }

  createPinneditems(){
    this.myrxivService.createPinneditems().subscribe(pinnes => this.pinnes = pinnes);
  }

  ngOnInit(): void {
    this.createPinneditems();
  }
  

}
