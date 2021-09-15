import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyfilesService} from '../myfiles.service';
import { InterestModalService } from '../interest-modal/interest-modal.service';

@Component({
  selector: 'app-interest-modal',
  templateUrl: './interest-modal.component.html',
  styleUrls: ['./interest-modal.component.scss']
})
export class InterestModalComponent implements OnInit {

  @Output() newEvent1 = new EventEmitter();
  @Output() newEvent2 = new EventEmitter();


  interestedAreas: any = [];
  interestedRoles: any = [];
  constructor(private myfileservice : MyfilesService,
    private interestmodalService : InterestModalService) { }

  // createInterestedAreas() {
  //   const interestedAreas = [];
  //   for (let i = 1; i < 5; i++) {
  //     interestedAreas.push({
  //       name: 'Singapore',
  //       image: '/assets/img/profiles/flag.png',
  //       status: false
  //     })
  //   }
  //   return interestedAreas;
  // }


  createInterestedAreas(){
    this.interestmodalService.createInterestedAreas().subscribe(interestedAreas => this.interestedAreas = interestedAreas);
  }


  // createInterestedRoles() {
  //   const interestedRoles = [];
  //   for (let i = 1; i < 5; i++) {
  //     interestedRoles.push({
  //       role: 'Banking',
  //       status: false
  //     })
  //   }
  //   return interestedRoles;
  // }

  createInterestedRoles(){
    this.interestmodalService.createInterestedRoles().subscribe(interestedRoles => this.interestedRoles = interestedRoles)
  }

  updateFlag(indexflag) {
    this.interestedAreas[indexflag].status = !this.interestedAreas[indexflag].status;
  }
  updateRole(indexrole) {
    this.interestedRoles[indexrole].status = !this.interestedRoles[indexrole].status;
  }
  chooseCountries() {
    let filteredCountries = this.interestedAreas.filter(country => {
      return country.status;
   
    })
this.myfileservice.setCountries(filteredCountries)

    console.log("countries", filteredCountries);
    this.newEvent1.emit();
  }

  proceednow() {
    this.myfileservice.setSuggestions();
    this.newEvent2.emit();
  }


  ngOnInit(): void {
    this.createInterestedAreas();
    this.createInterestedRoles();
  }

}
