import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CognitoService } from './service/cognito.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastService } from './service/toast.service';
import { GlobalService } from './service/global.service';
import { AuthService } from './service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public cognitoService: CognitoService,private router: Router , private toastService : ToastService,private globalService:GlobalService,private authService:AuthService ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("HTTP REQUEST", request)
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.cognitoService.getToken()}`
      }
    });

    return next.handle(request).pipe(
      catchError((error) => {


        if(error && error.message){
          this.toastService.show('Error' , error.message);
        }
        if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 0)) {
          // setTimeout(()=>{
          //   this.router.navigate(["/user"]);
          // })
          this.authService.signOut().subscribe(() => {
            // this.router.navigate([this.adminRoot]);
            console.log("asdsa")
            this.router.navigate(["/user"]);
          });
        }
        return throwError(error);
      })
    );;
  }
}
