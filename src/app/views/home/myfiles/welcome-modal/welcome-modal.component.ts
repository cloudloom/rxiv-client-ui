import { Component, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { MyfilesService } from '../myfiles.service';
@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss']
})
export class WelcomeModalComponent implements OnInit {


  @Output() newItemEvent = new EventEmitter();

  constructor(private myfilesService: MyfilesService) { }
  details: any;

  // details: any = {
  //   "title": "Welcome to RXIV",
  //   "img": "/assets/img/profiles/l-2.jpg",
  //   "name": "Thomas",
  //   "content": "Before you get started,we'd like to know more about your research interests.",

  // }


  getDetails() {
    this.myfilesService.getDetails().subscribe(details => this.details = details);
  }
  ngOnInit(): void {
    this.getDetails();
  }

  gotoInterests() {
    this.newItemEvent.emit();
  }

}
