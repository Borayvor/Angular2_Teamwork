import './app_rxjs';

import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './app_core/services/authentication.service';

import { UserModel } from './app_core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  private title: string;
  private isAuthenticated: boolean;
  private user: UserModel;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.title = 'Quest in ten photos';
    this.isAuthenticated = false;
  }

  ngOnInit() {
    this.setCurrentUser();
  }

  ngDoCheck() {
    if (this.authenticationService.isAuthenticated()) {
      this.user = this.authenticationService.getCurrentUser();
      this.isAuthenticated = this.authenticationService.isAuthenticated();
    } else {
      this.user = new UserModel;
      this.isAuthenticated = this.authenticationService.isAuthenticated();
    }

  }

  logout() {
    this.authenticationService.logout();
  }

  private setCurrentUser(): void {
    this.user = this.authenticationService.getCurrentUser();
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

}
