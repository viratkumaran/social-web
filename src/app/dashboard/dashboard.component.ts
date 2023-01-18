import { Component, OnInit } from '@angular/core';
import { PlotBand } from "@progress/kendo-angular-charts";
// import { jobsData, JobsData } from "./jobs-data"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  x: number;
  y: number;
  size: number;
  category: string;
  jobsData: any = [];
  constructor() { }

  ngOnInit() {
    this.jobsData = [{
      x: -2500,
      y: 50000,
      size: 500000,
      category: "Microsoft",
    },
    {
      x: 500,
      y: 110000,
      size: 7600000,
      category: "Starbucks",
    },
    {
      x: 7000,
      y: 19000,
      size: 700000,
      category: "Google",
    },
    {
      x: 1400,
      y: 150000,
      size: 700000,
      category: "Publix Super Markets",
    },
    {
      x: 2400,
      y: 30000,
      size: 300000,
      category: "PricewaterhouseCoopers",
    },
    {
      x: 2450,
      y: 34000,
      size: 90000,
      category: "Cisco",
    },
    {
      x: 2700,
      y: 34000,
      size: 400000,
      category: "Accenture",
    },
    {
      x: 2900,
      y: 40000,
      size: 450000,
      category: "Deloitte",
    },
    {
      x: 3000,
      y: 55000,
      size: 900000,
      category: "Whole Foods Market",
    },]
  }
  //  this.data  = jobsData;
  public xPlotBands: PlotBand[] = [
    {
      from: -5000,
      to: 0,
      color: "#00f",
      opacity: 0.05,
    },
  ];
}
