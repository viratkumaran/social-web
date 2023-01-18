import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
  loading = false;
  userArray: any = [];
  constructor(public FormBuilder: FormBuilder, public authService: AuthService,
    public router: Router) { }


  ngOnInit(): void {

    this.registerForm = this.FormBuilder.group({


      name: ['', Validators.required],
      // username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // gender: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  get f() {
    return this.registerForm.controls;
  }
  // showSucces(){
  //   this.toastr.success(' user was register');
  // }
  // showError(){
  //   this.toastr.error('invalid user');

  // }
  registerUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(this.registerForm.value);
    // this.showSucces()
    this.loading = true;
    this.router.navigate([''])
  }
}
