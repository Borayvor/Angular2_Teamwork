import './app_rxjs';

import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './app_core/services/authentication.service';

import { UserProfileModel } from './app_core/models/user-profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  private title: string;
  private isAuthenticated: boolean;
  private user: UserProfileModel;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.title = 'Adventure in ten photos';
  }

  ngOnInit() {
    this.isAuthenticated = this.authenticationService.isAuthenticated();
    this.user = this.authenticationService.getCurrentUser();
  }

  ngDoCheck() {
    this.isAuthenticated = this.authenticationService.isAuthenticated();

    if (this.isAuthenticated && !this.user.objectId) {
      this.user = this.authenticationService.getCurrentUser();
    }
  }

  logout() {
    this.authenticationService.logout();
  }

}
