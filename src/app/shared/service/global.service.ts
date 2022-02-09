import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';


@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    userDetails: BehaviorSubject<any> = new BehaviorSubject(null);
    showAlert: BehaviorSubject<any> = new BehaviorSubject({});
    pageTitle: BehaviorSubject<any> = new BehaviorSubject(null);
    showProgressBar: BehaviorSubject<any> = new BehaviorSubject(null);
    envInfo: BehaviorSubject<any> = new BehaviorSubject(null);
    // Default grid page size 
    pageSize = 20;

    private history = [];

    constructor(private router: Router, private _location: Location) {

    }


    // public loadRouting(): void {
    //     this.router.events
    //         .pipe(filter(event => event instanceof NavigationEnd))
    //         .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
    //             this.history = [...this.history, urlAfterRedirects];
    //         });
    // }

    public getHistory(): string[] {
        return this.history;
    }

    public getPreviousUrl(): string {
        return this.history[this.history.length - 2] || '/index';
    }


    setUserDetails(data : any): void {
        this.userDetails.next(data);
        localStorage.setItem('user-detail', JSON.stringify(data));
    }

    getUserDetails(): any {
        const userDetail : any = localStorage.getItem('user-detail');
        const data = JSON.parse(userDetail);
        if (data) {
            return data;
        }
        else {
            this.router.navigate(['/user/login']);
        }
    }

    goBack(): void {
        this._location.back();
    }


    setEnv(data: any) {
        if (data && data.build) {
            this.envInfo.next(data.build)

        }
    }
}
