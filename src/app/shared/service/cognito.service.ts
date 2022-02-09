import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    ActivatedRoute
} from '@angular/router';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpResponse
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as AWSCognito from 'amazon-cognito-identity-js';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as moment from 'moment';
import { GlobalService } from './global.service'
import { ToastService } from './toast.service';


@Injectable({
    providedIn: 'root'
})
export class CognitoService {
    cognitoUser!: AWSCognito.CognitoUser;
    userPool!: AWSCognito.CognitoUserPool;
    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private globalService: GlobalService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private toastService: ToastService
    ) { }
    token: any;
    sessionUserAttributes: any;
    showConfirmPassword = new BehaviorSubject<Boolean>(false);
    verificationCodeSent = new BehaviorSubject<Boolean>(false);
    userEmail = new BehaviorSubject<String>('');
    showAlert = new BehaviorSubject<any>({});


    poolData = environment.poolData;
    /*
        createCognitoIUser()
      */
    createCognitoIUser(username: string): void {
        this.userPool = new AWSCognito.CognitoUserPool(this.poolData);
        this.cognitoUser = new AWSCognito.CognitoUser({
            Username: username,
            Pool: this.userPool
        });
    }

    /*
         authenticateUserPool() : Cognito Authenticate : onLoginSucess
      */
    authenticateUserPool(username: string, password: string, formData: any): Promise<any> {
        let root = this;
        this.createCognitoIUser(username);

        const authDetails = new AWSCognito.AuthenticationDetails({
            Username: username,
            Password: password
        });

        return new Promise((resolve, reject) => {

            this.cognitoUser.authenticateUser(authDetails, {
                onSuccess: result => {
                    // Get & Store jwt token from idTkoen
                    this.setToken(result.getIdToken().getJwtToken());
                    this.setRefreshToken(result.getRefreshToken().getToken());
                    this.setUserLoggedIn(true);
                    this.onLoginSucess();

                    resolve(true)
                },
                onFailure: err => {
                    console.log('err', err);
                    this.toastService.show(err.message)
                    reject(true);
                    // this.globalService.showAlert.next({
                    //     'type': 'Error',
                    //     content: err.message
                    // });
                },
                newPasswordRequired: function (userAttributes, requiredAttributes) {
                    // User was signed up by an admin and must provide new
                    // password and required attributes, if any, to complete
                    // authentication.
                    // the api doesn't accept this field back
                    delete userAttributes.email_verified;
                    // store userAttributes on global variable
                    // this.sessionUserAttributes = userAttributes;
                    root.redirectToConfirmPassword();
                    resolve(true);
                }
            });

        })


    }

    /*
        onLoginSucess() :  Gets logged in user details;
      */
    onLoginSucess() {
        return new Promise((resolve, reject) => {
            this.httpClient
                .get(environment.apiUrl + '/me', this.getHeader())
                .subscribe((response: any) => {
                    let resp: any = response;

                    console.log("RESPO", resp)

                    this.globalService.setUserDetails(resp);

                    resolve(resp)

                    // const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    // // Navigate to the redirect url
                    // this._router.navigateByUrl(redirectURL);
                }, (err) => {
                    reject(err)
                    console.log("Error", err);
                });
        });
    }

    getHeader() : void | any {
        let token: any = localStorage.getItem('rxiv-token');
        if (token != null) {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                })
            };
            return httpOptions;
        } else {
            // this.router.navigate(['/user/login']);
        }

    }

    /*
        setUserLoggedIn() :  set user loggedIn status;
      */
    setUserLoggedIn(value: any) {
        localStorage.setItem(
            'realcheck-admin-loggedIn',
            JSON.stringify({
                value: value
            })
        );
    }

    /*
        isLoggedIn() :  returns user loggedIn status;
      */
    isLoggedIn(): boolean {
        let val: any = localStorage.getItem('realcheck-admin-loggedIn');
        let isLoggedIn = JSON.parse(val);
        if (isLoggedIn && isLoggedIn.value) return true;
        else return false;
    }
    /*
      onLogout() :  Clears data & logout.
      */
    onLogout(): Observable<any> {
        // this._notificationService.closeEventSource();


        console.log("ON LOGOUT")
        // this.dialogRef.closeAll();
        // localStorage.removeItem('realcheck-admin-loggedIn');
        localStorage.removeItem('rxiv-token');
        // localStorage.removeItem('realcheck-admin-refresh-token');
        localStorage.removeItem('user-detail');
        this.setUserLoggedIn(false);
        // this.router.navigate(['sign-in']);

        return of(true);

        // this._notificationService.acceptNotifications = false;
    }

    /*
      redirectToConfirmPassword() : redirect to confirm password
      */
    redirectToConfirmPassword() {
        this.showConfirmPassword.next(true);
    }

    /*
      handleNewPassword() : submit new credentials from confirm password
      */

    handleNewPassword(newPassword: string) {
        if (this.cognitoUser) {
            this.cognitoUser.completeNewPasswordChallenge(
                newPassword,
                this.sessionUserAttributes,
                {
                    onSuccess: result => {
                        console.log('Success');
                        this.setToken(result.getIdToken().getJwtToken());

                        this.onLoginSucess();
                    },
                    onFailure: err => {
                        // this.globalService.showAlert.next({
                        //     content: err.message
                        // });
                    }
                }
            );
        }
        else {
            this.router.navigate(['/login']);
        }
    }

    /*
      setToken() :  Saves token recieved in local storage 
      */

    setToken(token: string) {
        this.token = token;
        localStorage.setItem('realcheck-admin-token', token);
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('rxiv-token')
        }

        return this.token;
    }

    removeToken() {
        localStorage.removeItem('rxiv-token');
        this.token = null;
    }
    setRefreshToken(token: string) {
        this.token = token;
        localStorage.setItem('realcheck-admin-refresh-token', JSON.stringify({ "token": token, 'setTime': new Date() }));
    }


    onRegister(formData: any, type: any) {
        const userType = type.toLowerCase();
        delete formData.confirmPassword;
        return this.httpClient.post(environment.apiUrl + '/signup/' + userType, formData);

    }
    forgotPassword(username: string) {
        let root = this;
        this.createCognitoIUser(username);


        this.cognitoUser.forgotPassword({
            onSuccess: function (data) {
                // successfully initiated reset password request
                console.log('CodeDeliveryData from forgotPassword: ' + data);
            },
            onFailure: function (err) {
                console.log("Error recieved")
                root.globalService.showAlert.next({
                    'content': err.message || JSON.stringify(err)
                });
            },
            //Optional automatic callback
            inputVerificationCode: function (data) {
                root.verificationCodeSent.next(true);
                root.globalService.showAlert.next({
                    'content': 'Verification code has been sent to your registered email id'
                });
            }
        });
    }

    confirmPassword(verificationCode: any, newPassword: string, email: string) {
        let root = this;
        if (!this.cognitoUser) {
            this.createCognitoIUser(email);
        }

        this.cognitoUser.confirmPassword(verificationCode, newPassword, {
            onSuccess() {
                root.router.navigate(['/login']);
            },
            onFailure(err) {
                root.globalService.showAlert.next({
                    'content': err.message,
                    'type': 'Error',

                });

            }
        });

    }

    logoutGoogle(url: string) {
        return this.httpClient.get(url, {})
    }
}
