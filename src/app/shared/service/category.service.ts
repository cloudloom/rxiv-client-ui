import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import countryData from 'src/app/data/CountryData';
import organizationData from 'src/app/data/OrganizationData';
import { Country } from '../interface/country';
import { Organization } from '../interface/organization';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }


  getCountries() : Observable<Country[]>{

    return of(countryData)
  }

  getOrganizations() : Observable<Organization[]>{

    return of(organizationData)
  }
}
