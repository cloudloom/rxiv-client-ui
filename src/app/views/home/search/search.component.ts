import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  gridRadios: string;
  radiobuttonlists = ["Relevance", "Date created", "Last opened", "Name", "File size"];

  constructor(private route: ActivatedRoute,
    private location: Location
  ) { }
  searchkey: any

  ngOnInit(): void {
    this.route.queryParams.subscribe(value => {
      this.searchkey = value.key;
    });
  }
  getRadiobutton(): void {
  }

}
