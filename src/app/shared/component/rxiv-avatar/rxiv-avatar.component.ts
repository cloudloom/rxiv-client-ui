import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxiv-avatar',
  templateUrl: './rxiv-avatar.component.html',
  styleUrls: ['./rxiv-avatar.component.scss']
})
export class RxivAvatarComponent implements OnInit {

  constructor() { }


  @Input() title : string = "";

  ngOnInit(): void {
  }

}
