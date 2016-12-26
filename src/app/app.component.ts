import './app_rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './app_core/services/authentication.service';
import { UserService } from './app_core/services/user.service';

import { UserModel } from './app_core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, UserService]
})
export class AppComponent implements OnInit {
  private title: string;
  private isAuthenticated: boolean;
  private user: UserModel;

  constructor(
    private router: Router, 
    private data: UserService, 
    private authenticationService: AuthenticationService
    ) {
    this.title = 'App works !';
    this.isAuthenticated = false;
  }

  ngOnInit() {
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
