import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  doPayment(id: number, token: string) {
    const url = `${environment.apiUrl}/documents/${id}/pay`;
    // setTimeout(() => {
    //   this.paymentReq = undefined;
    // }, 3000);
    // if (!this.paymentReq) {
    return this.http.put(url, {"secureCode":token})
      .pipe(
        map((res: any) => {

          return res;
        })
      );

    // } else {
    //   console.log("Multiple payment request");
    //   return null;
    // }

  }
}
