import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CognitoService } from '../../service/cognito.service';
import { GlobalService } from '../../service/global.service';
// import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad
{
    /**
     * Constructor
     */
    constructor(
        // private _authService: AuthService,
        private router: Router,
        private cognitoService : CognitoService,
        private globalService:GlobalService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    // {
    //     const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
    //     return this._check(redirectUrl);
    // }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const currentUser = await this.globalService.getUserDetails();
        if (currentUser) {
          if (route.data && route.data.roles) {
            if (route.data.roles.includes(currentUser.role)) {
              return true;
            } else {
              this.router.navigate(['/unauthorized']);
              return false;
            }
          } else {
            return true;
          }
        } else {
          this.router.navigate(['/user/login']);
          return false;
        }
      }

    /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
    // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    // {
    //     const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
    //     return this._check(redirectUrl);
    // }
    async canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Promise<boolean> {
        const currentUser = await this.globalService.getUserDetails();
    
        if (currentUser) {
          if (route.data && route.data.roles) {
            if (route.data.roles.includes(currentUser.role)) {
              return true;
            } else {
              this.router.navigate(['/unauthorized']);
              return false;
            }
          } else {
            return true;
          }
        } else {
          this.router.navigate(['/user/login']);
          return false;
        }
      }

    /**
     * Can load
     *
     * @param route
     * @param segments
     */
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean
    {
        return this._check('/');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @param redirectURL
     * @private
     */
    private _check(redirectURL: string): Observable<boolean>
    {
        // Check the authentication status
        const isLoggedIn = this.cognitoService.isLoggedIn();

        console.log("isLoggedIn" , isLoggedIn)
        if(!isLoggedIn){
            this.router.navigate(['/user/login'], {queryParams: {redirectURL}});
            return of(false);
        }else{
            return of(true);
        }



        // return this._authService.check()
        //            .pipe(
        //                switchMap((authenticated) => {

        //                    // If the user is not authenticated...
        //                    if ( !authenticated )
        //                    {
        //                        // Redirect to the sign-in page
        //                        this._router.navigate(['user/login'], {queryParams: {redirectURL}});

        //                        // Prevent the access
        //                        return of(false);
        //                    }

        //                    // Allow the access
        //                    return of(true);
        //                })
        //            );
    }
}
