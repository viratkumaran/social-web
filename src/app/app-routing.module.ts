import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainviewComponent } from './mainview/mainview.component';
import { LoginComponent } from './login1/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GuardActivateGuard } from './guard-activate.guard';
import { MonitorComponent } from './monitor/monitor.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signin", component: SignupComponent },
  { path: "connection", component: MainviewComponent, canActivate: [GuardActivateGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [GuardActivateGuard] },
  { path: "Monitor", component: MonitorComponent, canActivate: [GuardActivateGuard] },

  { path: "post", component: PostComponent, canActivate: [GuardActivateGuard] },
  { path: "message", component: MessageComponent, canActivate: [GuardActivateGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [GuardActivateGuard] },
  { path: "schedule", component: ScheduleComponent, canActivate: [GuardActivateGuard] },
  { path: "", component: LandingpageComponent },

  // { path: '**', redirectTo: 'home', pathMatch: 'full' }
  // {path:'',redirectTo:'/login',pathMatch:'full'}
  // { path: "", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
