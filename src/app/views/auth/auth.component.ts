import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CognitoService } from 'src/app/shared/service/cognito.service';
import { GlobalService } from 'src/app/shared/service/global.service';
import { environment } from '../../../environments/environment';
// import { AuthService } from '../../shared/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
    userDetails: any;
    loading: boolean = true;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private cognitoService: CognitoService) {
        console.log("test")
        let url = this.router.routerState.snapshot.url;
        let params = url.split('id_token=');
        if (params[1]) {
            let tokenData = params[1];
            let splitTokenInfo = tokenData.split('&');
            let token = splitTokenInfo[0];
            if (token != '') {
                localStorage.setItem('rxiv-token', token);

                // this.authService.signIn({ email: 'employee@gmail.com', password: 'employee' }).then(user => {
                //     this.router.navigate([environment.adminRoot]);

                // })


                // this.authService.getUserDetails().subscribe((res) => {


                //     this.router.navigate(['/app']);



                // })
                this.cognitoService.onLoginSucess().then((res: any) => {
                    this.loading = false;
                    console.log("userdetails", res)

                    this.router.navigate(['/app']);

                    //this.router.navigate(['/main/home']);


                })

            } else {
                this.redirectToUnauthorized();
            }

        } else {
            this.redirectToUnauthorized();
            // if (!this.userService.isLoggedIn()) {

            //     this.redirectToUnauthorized();
            // }
        }

    }

    redirectToUnauthorized(): void {

        console.log("REDIRECT TO UNAUTHERISED")
        // this.router.navigate([environment.adminRoot, 'essays']);

        this.router.navigate(['/user/login']);

        // this.router.navigate(['unauthorized']);
        // window.open('https://compo.auth.ap-southeast-1.amazoncognito.com/login?response_type=token&client_id=isb54pags086knobkqi2tisoh&redirect_uri=https://compo.analytix-online.com/app/auth', '_self');
    }

    ngOnInit(): void {
    }

}
