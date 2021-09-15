import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/shared/auth.roles';
import { AuthService } from 'src/app/shared/auth.service';
import { MyfilesService } from '../myfiles.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  constructor(private authService: AuthService,
    private myfileservice: MyfilesService) { }

suggestions : any = [];
user :any;

// getSuggestions(){
//   const suggestions = [];
//   for(let i = 1 ; i < 13 ; i++){
//     suggestions.push({
//       categary : "Flooring Market",
//       title : "Flooring Market in Singapore",
//       image :"/assets/img/profiles/l-2.jpg",
//       pages : "17 pages",
//     })
//   }
//   return suggestions;
// }

async ngOnInit(): Promise<void> {
  await this.authService.getUser().then((user) => {
    this.user = user;
  });
  if (this.user){

    
    this.myfileservice.suggestionsObs.subscribe((suggestions) => {
      this.suggestions = suggestions;
    })

    // this.suggestions = this.getSuggestions();
  }
    
  }

}
