import { AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserRole } from 'src/app/shared/auth.roles';
import { AuthService } from './../../../shared/auth.service'
import { MyfilesService } from './myfiles.service';

@Component({
  selector: 'app-myfiles',
  templateUrl: './myfiles.component.html',
  styleUrls: ['./myfiles.component.scss']
})
export class MyfilesComponent implements OnInit {
  welcomemodalRef: BsModalRef;
  @ViewChild('welcomemodal', { static: true }) welcomemodal: TemplateRef<any>;

  interestmodalRef: BsModalRef;
  @ViewChild('template') template: TemplateRef<any>;


  constructor(private modalService: BsModalService,
    private authService: AuthService,
    private myfileservice: MyfilesService) { }


  user: any
  files : any = []

  // modaloptions : any = {
  //   backdrop : 'static',
  // keyboard : false
  // }


  async ngOnInit(): Promise<void> {
    await this.authService.getUser().then((user) => {
      this.user = user;

    });

    if (this.user && !this.user.alreadyViewed) {
      this.welcomemodalRef = this.modalService.show(
        this.welcomemodal,
        {
          class: 'modal-sm modal-dialog-centered',
          backdrop: 'static',
          keyboard: false
        }
      );
    }
    if (this.user) {

      this.myfileservice.pinnedCountriesObs.subscribe((countries) => {
        this.files = countries;
      })


    }else{
      this.files = [{}]
    }

  }

  gotoSecondModal(): any {
    this.authService.updateViewedStatus()
    this.welcomemodalRef.hide();

    setTimeout(() => {
      this.interestmodalRef = this.modalService.show(
        this.template, {
        class: 'modal-md modal-dialog-centered',
        backdrop: 'static',
        keyboard: false
      })
    }, 500)

  }

  chooseCountries() : any {
    this.interestmodalRef.hide();
  }

proceednow(): any {
  this.interestmodalRef.hide();
}

}


