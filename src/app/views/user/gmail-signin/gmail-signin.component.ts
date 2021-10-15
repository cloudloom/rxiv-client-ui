import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gmail-signin',
  templateUrl: './gmail-signin.component.html',
  styleUrls: ['./gmail-signin.component.scss']
})
export class GmailSigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  redirectToGoogleSignIn() {

    window.open(environment.cognitoUrl + '/oauth2/authorize?identity_provider=Google&redirect_uri=' +
      environment.cognitoRedirectUri + '&response_type=token&client_id=' + environment.clientId + '&scope=email%20openid', '_self');




  }

}
