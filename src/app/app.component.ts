import './app_rxjs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title: string;
  private isAuthenticated: boolean;
  private user: {};

  constructor() {
    this.title = 'App works !'
    this.isAuthenticated = false;
  }

  ngOnInit() {

    this.user = {
      email: 'qwe@qwe.qwe'
    };
  }
}
