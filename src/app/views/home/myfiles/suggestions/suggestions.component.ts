import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
    private myfileservice: MyfilesService, private modalService: BsModalService, private router: Router) { }

  suggestions: any = [];
  user: any;
  modalRef: BsModalRef;

  selectedFile: any;

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
    if (this.user) {

      console.log("Suggestion")

      this.myfileservice.getSuggestions().subscribe((suggestions) => {
        this.suggestions = suggestions;
        console.log("Suggestion", suggestions)
      })

      // this.suggestions = this.getSuggestions();
    }

  }

  openModal(template: TemplateRef<any>, selectedFile): void {

    this.selectedFile = selectedFile;
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg modal-dialog-centered' })
    );

  }


  goToPayment() {
    this.modalRef.hide();
    setTimeout(() => {
      

      this.router.navigate(["/app/payment"], {
        queryParams: { key: this.selectedFile.id },
      });


    }, 500)

  }

}
