import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private titles: string[];
  private address: string;
  private time: number;
  private contactEmail: string;
  private tel: number;

  constructor() { }

  ngOnInit() {
    this.titles = ['About', 'Address', 'Hours of operation', 'Contact info'];
    this.address = 'бул. "Александър Малинов“ 31,1729 София';
    this.time = 8;
    this.contactEmail = 'academy@telerik.com';
    this.tel = 888888888;
  }

}
