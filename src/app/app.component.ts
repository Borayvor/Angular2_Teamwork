import './app_rxjs';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title: string;

  constructor() {
    this.title = 'Adventure in ten photos';
  }

  ngOnInit() {
  }

}
