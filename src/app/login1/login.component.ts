import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// import {  ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup |any;
  submitted = false;
  loading = false;
  uservalue:any =[];

  constructor(public formBuilder: FormBuilder,
     public authService:AuthService,
    public router: Router) { 
    }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        // email: ['', [Validators.required, Validators.email]],

        password: ['', Validators.required]
    });
    
  }
  get f () {return this.loginForm.controls;}

 
  loginUser() {
    
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    
   
    this.authService.signIn(this.loginForm.value).subscribe (res => {
      console.log(res.status,">>>> RES.status....in login")
      if(res.length==0){
       
        console.log("false")
      }else{
        this.loading = true;
        
        setTimeout(() => {
          
          this.router.navigate(['dashboard'])
        }, 4000);
        
      }
      
     
    });

}









}
// loginUser() {
//   this.authService.signIn(this.loginForm.value)
// }



 // this.authService.signIn(this.loginForm.value).subscribe (res => this.uservalue=res,err=>{
      
    //   if(err instanceof HttpErrorResponse){
    //     if(err.status === 401){
    //       this.router.navigate(['/login'])
    //     }
    //   }
     
    // });