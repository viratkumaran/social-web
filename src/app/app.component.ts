import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialApp';
  data: any;
  showHeader: boolean = false;
  showData: any
  ngOnInit(): void {

    this.data = localStorage.getItem('access_token');
    console.log(this.data);
    this.showData = false;
    // this.getAccess();
  }
  constructor(public formBuilder: FormBuilder,
    public authService: AuthService, private router: Router) {
    router.events.forEach((event) => {
      // console.log(event)
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHeader = false;
        }
        else if (event['url'] == '/signin') {
          this.showHeader = false;
        }
        else if (event['url'] == '/') {
          this.showHeader = false;
        }
        else {
          // console.log("NU")
          this.showHeader = true;
        }
      }
    });

  }
  // getAccess(){
  //   this.authService.user
  // }
}
