import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:8000/api/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  user!: any[];

  constructor(public httpClient: HttpClient,public router: Router) { }

  register(user: any) {
    console.log(user,">>> USER")
    return this.httpClient.post(`${this.API_URL}/register`, user)
    .subscribe((res: any) => {
      console.log(res,">>>res")
     
    })
   
  }
  
// isLoggedIn(): boolean {
//   let temp = localStorage.getItem('currentUser');
//   let loggedUser = temp ? JSON.parse(temp) : null;
//   return (loggedUser !== null) ? true : false;
// }

// login(user: any) :Observable<any>{
  
//   return this.httpClient.post(`${this.API_URL}/login`, user,{headers:this.headers}).pipe(
//     map((res: any) => {
//       localStorage.setItem('currentUser', JSON.stringify(res))
//       return res|| {}
    
//     })
   
//   )}
signIn(user: any) {
  console.log(user)
  return this.httpClient.post(`${this.API_URL}/login`, user,{headers:this.headers}).pipe(
    
    map((res: any) => {
             localStorage.setItem('access_token', res.token)
           return res|| {}
          
        })
         
        )}

getToken() {
  return localStorage.getItem('access_token');
}

 isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
}
}
