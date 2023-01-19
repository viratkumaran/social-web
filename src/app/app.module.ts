import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login1/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { QueueComponent } from './queue/queue.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MonitorComponent } from './monitor/monitor.component';
import { BrandComponent } from './brand/brand.component';
import { PostComponent } from './post/post.component';
import { MessageComponent } from './message/message.component';
import { HastagsComponent } from './hastags/hastags.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MainviewComponent } from './mainview/mainview.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AuthInterceptor } from './service/authconfig.interceptor';


import { FormsModule } from '@angular/forms';

//import ReactiveFormsModule here
import { ReactiveFormsModule } from '@angular/forms';
import { DateAgoPipe } from './dayago.pipe';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FbComponent } from './fb/fb.component';
import { InstaComponent } from './insta/insta.component';
import { TwitterComponent } from './twitter/twitter.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { GooglemybComponent } from './googlemyb/googlemyb.component';
import { InbocComponent } from './inboc/inboc.component';
import { PlaningComponent } from './planing/planing.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainheaderComponent,
    DashboardComponent,
    ScheduleComponent,
    QueueComponent,
    AnalyticsComponent,
    MonitorComponent,
    BrandComponent,
    PostComponent,
    MessageComponent,
    HastagsComponent,
    ProfileComponent,
    SettingsComponent,
    MainviewComponent,
    DateAgoPipe,
    LandingpageComponent,
    FbComponent,
    InstaComponent,
    TwitterComponent,
    LinkedinComponent,
    GooglemybComponent,
    InbocComponent,
    PlaningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule, ChartsModule, BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
