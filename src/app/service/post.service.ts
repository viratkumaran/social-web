import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { Customer } from './customer';
// import { Customer } from '../model/dataTable';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  Url: string;
  header: any;
  // baseURL: string = "https://fa-enqj-test-saasfaprod1.fa.ocs.oraclecloud.com/fscmUI/faces/FuseOverview";
  constructor(private http: HttpClient,public router: Router) {
    this.Url = 'http://localhost:8000/api';

    const headerSettings: { [name: string]: string | string[]; } = {};
    // console.log(this.baseURL)
  }

  // createCategories(formValue: any): Observable<any> {
  //     var path = this.Url + 'Product';
  //     console.log(path, "urlcheck",formValue)
  //     let headers = new Headers();
  //     headers.append('Content-type', 'application/json');
  //     return this.http.post(path, formValue, { headers: this.header })
  // }
  createPost(user: any) {
    console.log(user, '>>> PhoneDetail');
    return this.http.post(`${this.Url}/post/fbupload`,user)
      .subscribe((res: any) => {
        console.log(res, '>>>res');

      });

  }
  createPostinsta(user: any) {
    console.log(user, '>>> createPostinsta');
    return this.http.post(`${this.Url}/post/instaupload`,user)
      .subscribe((res: any) => {
        console.log(res, '>>>res');

      });

  }
  createPostLinkedIn(user: any) {
    console.log(user, '>>> createPostinsta');
    return this.http.post(`${this.Url}/post/linkedinupload`,user)
      .subscribe((res: any) => {
        console.log(res, '>>>res');

      });

  }
  schedulePost(user: any) {
    console.log(user, '>>> PhoneDetail');
    return this.http.post(`${this.Url}/post/fbuploadsch`,user)
      .subscribe((res: any) => {
        console.log(res, '>>>res');
      });

  }
  getschedulelist(): Observable<any> {
    return this.http.put(`${this.Url}/post/getfbuploadsch`, { headers: this.header }).pipe(
      map((res: any) => {
        console.log(res, '>>>res');

        return res || {};
      }),
    );
  }
  // maxmin(maxmin: any): Observable<any> {
  //   return this.http.put(`${this.Url}/Product/maxmin?`, maxmin, { headers: this.header }).pipe(
  //     map((res: any) => {
  //       console.log(res, '>>>res');

  //       return res || {};
  //     }),
  //   );
  // }
  // register(user: any) {
  //   console.log(user, '>>> USER');
  //   return this.http.post(`${this.Url}/user/register`, user)
  //     .subscribe((res: any) => {
  //       console.log(res, '>>>res');

  //     });

  // }

  // signIn(user: any) {
  //   return this.http.post(`${this.Url}/user/login`, user, { headers: this.header }).pipe(

  //     map((res: any) => {
  //       localStorage.setItem('access_token', res);
  //       return res || {};

  //     })

  //   );
  // }
  // emailSend(body) {
  //   let headers = {
  //     headers: new HttpHeaders({
  //       'Content-Type': "application/json"
  //     })

  //   }
  //   return this.http.post(`${this.Url}/email`, body, headers)
  // }
  // emailSend(user: any) {
  //   console.log(user, '>>> PhoneDetail');
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.post(`${this.Url}/email`, user, { headers: this.header })
  //     .subscribe((res: any) => {
  //       console.log(res, '>>>res');

  //     });

  // }
}
