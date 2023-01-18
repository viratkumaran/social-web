import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {
  Url: Promise<boolean>;
  @Input() showData: any;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.showData = true;
    window.location.href = "/";

  }
}
