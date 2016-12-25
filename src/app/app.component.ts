import './app_rxjs';

import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuardService } from './app_core/services/auth-guard.service';
import { AuthenticationService } from './app_core/services/authentication.service';
import { UserService } from './app_core/services/user.service';

import { UserModel } from './app_core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  private title: string;
  private isAuthenticated: boolean;
  private user: UserModel;

  constructor(
    private router: Router, 
    private data: UserService, 
    private authGuard: AuthGuardService,
    private authenticationService: AuthenticationService
    ) {
    this.title = 'App works !';
    this.isAuthenticated = false;
  }

  ngOnInit() {
    this.setCurrentUser();
  }

  ngOnChanges() {
    this.setCurrentUser();
  }

  logout(){
    this.authenticationService.logout();
  }

  private setCurrentUser(): void {
    this.user = this.authenticationService.getCurrentUser();
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

}
