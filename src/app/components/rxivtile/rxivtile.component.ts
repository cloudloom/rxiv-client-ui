import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxivtile',
  templateUrl: './rxivtile.component.html',
  styleUrls: ['./rxivtile.component.scss']
})
export class RxivtileComponent implements OnInit {

  constructor() { }
  @Input() showFileTypeIcon = false;

  @Input() categary;
  @Input() title;
  @Input() image;
  @Input() pages;
  @Input() read = false;


  ngOnInit(): void {
  }

}
