import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'About';
  }

}
