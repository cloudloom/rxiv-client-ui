import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/shared/interface/country';
import { Organization } from 'src/app/shared/interface/organization';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-interest-modal',
  templateUrl: './interest-modal.component.html',
  styleUrls: ['./interest-modal.component.scss']
})
export class InterestModalComponent implements OnInit {

  interestedAreas: any;
  interestedRoles: any;
  countries: Country[] = [];
  organizations: Organization[] = [];
  selectedCountries: Country[] = [];
  totalCount : number = 6;
  selectedOrganizations : Organization[] = [];
  selectedResults : any = [];

  constructor(public activeModal: NgbActiveModal,
    private categoryService: CategoryService) { }



  getCountries() {
    this.categoryService.getCountries().subscribe(countryData => this.countries = countryData)

  }

  getOrganizations() {
    this.categoryService.getOrganizations().subscribe(organizationData => this.organizations = organizationData)
  }

  updateFlag(indexflag: any) {
    this.countries[indexflag].status = !this.countries[indexflag].status;
  }
  updateRole(indexrole: any) {
    this.organizations[indexrole].status = !this.organizations[indexrole].status;
  }

  chooseCountries() {

    // this.activeModal.close('Close click')
    this.selectedResults = [...this.selectedCountries,...this.selectedOrganizations];
    console.log("eeee",this.selectedResults)
    
    //     let filteredCountries = this.interestedAreas.filter(country => {
    //       return country.status;

    //     })
    // this.myfileservice.setCountries(filteredCountries)

    //     console.log("countries", filteredCountries);
    //     this.newEvent1.emit();
  }


  proceednow() {
    this.activeModal.close('Close click')
    // this.myfileservice.setSuggestions();
    // this.newEvent2.emit();
  }

  ngOnInit(): void {
    // this.interestedAreas = this.createInterestedAreas();
    // this.interestedRoles = this.createInterestedRoles();
    this.getCountries();
    this.getOrganizations()
  }
  getSelectedCountries(country: Country) {


    if (this.selectedCountries.indexOf(country) > -1) {
      this.selectedCountries.splice(this.selectedCountries.indexOf(country), 1)
    }else{
      this.selectedCountries.push(country)
    }

    this.chooseCountries();
    
    // const countries : any = {};
    // countries[country.id] = country;
    // // this.countries = Object.values(countries);

    // this.selectedCountries = Object.values(countries)
    // // this.selectedCountries.push(countries)
    // console.log("nnnnn",this.selectedCountries);
  }

  getSelectedOrganizations(organization : Organization){

    if(this.selectedOrganizations.indexOf(organization) > -1){
      this.selectedOrganizations.splice(this.selectedOrganizations.indexOf(organization),1)
    }else{
      this.selectedOrganizations.push(organization)
    }
    this.chooseCountries();
    
  }
  closeModal(){
    this.activeModal.close('Close click')
  }
  // counter(){
  //   let totalCount ;
  //   if(this.totalCount === 0){
  //     totalCount = '';
  //   }else{
  //     totalCount = this.totalCount - this.selectedResults.length;
  //   }
  //   this.totalCount = Number(totalCount);
  // }

}