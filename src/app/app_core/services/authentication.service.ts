import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';
import { AlertService } from './alert.service';

import { UserModel } from './../models/user.model';

@Injectable()
export class AuthenticationService {
  private AUTHENTICATION_TOKEN_NAME: string;
  private loginUrl: string;
  private logoutUrl: string;
  private baseUrl: string;
  private currentUser: UserModel;

  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {
    this.AUTHENTICATION_TOKEN_NAME = 'authentication';
    this.loginUrl = '/users/login';
    this.logoutUrl = '/users/logout';
    this.baseUrl = '';
    this.currentUser = new UserModel;
  }

  login(email: string, password: string, loading: boolean, returnUrl: string = this.baseUrl): void {
    this.baseService.post(this.loginUrl, JSON.stringify({ login: email, password: password }))
      .subscribe(
      data => {
        this.currentUser = data
        localStorage.setItem(this.AUTHENTICATION_TOKEN_NAME, JSON.stringify({ token: this.currentUser['user-token'] }));
        this.router.navigate([returnUrl]);
      },
      error => {
        this.alertService.error(error);
        loading = false;
      });
  }

  logout(): void {
    localStorage.removeItem(this.AUTHENTICATION_TOKEN_NAME);
    // console.log('logout');
    this.baseService.get(this.logoutUrl);
    this.router.navigate([this.baseUrl]);
  }

  getCurrentUser() {
    let user = this.currentUser;
    
    console.log(user);

    return user;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.AUTHENTICATION_TOKEN_NAME);
  }

}
