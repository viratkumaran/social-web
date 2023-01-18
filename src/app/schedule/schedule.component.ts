import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/post.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  userArray: any;
  constructor(private https: HttpClient, private service: AppService) { }

  ngOnInit() {
    this.getprod()
  }
  getprod() {
    this.service.getschedulelist().subscribe(res => {
      console.log(res.result, '>>>> Res.result');
      this.userArray = res.result;


    });
  }
}
