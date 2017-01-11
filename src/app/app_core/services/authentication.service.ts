import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { AlertService } from './alert.service';
import { UserService } from './user.service';

import { UserAuthenticationModel } from './../models/user-authentication.model';
import { UserLoginModel } from './../models/user-login.model';
import { UserRegisterModel } from './../models/user-register.model';
import { UserProfileModel } from './../models/user-profile.model';

@Injectable()
export class AuthenticationService {
  private AUTHENTICATION_TOKEN_NAME: string;
  private registerUrl: string;
  private loginUrl: string;
  private logoutUrl: string;
  private baseUrl: string;
  private authenticatedUser: UserAuthenticationModel;
  private currentUser: UserProfileModel;
  private loginUser: UserLoginModel;

  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {
    this.AUTHENTICATION_TOKEN_NAME = 'authentication';
    this.registerUrl = '/users/register';
    this.loginUrl = '/users/login';
    this.logoutUrl = '/users/logout';
    this.baseUrl = '';
    this.currentUser = new UserProfileModel;
  }

  register(user: UserRegisterModel) {

    if (!user.userPhoto) {
      user.userPhoto = 'https://api.backendless.com/EB364692-B174-248D-FF33-8BBBF9FD7800/v1/files/media/usersPhotos/avatar_noImage.jpg';
    }

    this.baseService.post(this.registerUrl, JSON.stringify(user))
      .subscribe(
      data => {
        this.loginUser = data;
        this.login(user.email, user.password)
      },
      error => {
        this.alertService.error(error);
      });
  }

  login(email: string, password: string, returnUrl: string = this.baseUrl): void {
    this.baseService.post(this.loginUrl, JSON.stringify({ login: email, password: password }))
      .subscribe(
      data => {
        this.authenticatedUser = data;
        localStorage.setItem(this.AUTHENTICATION_TOKEN_NAME, JSON.stringify({ id: this.authenticatedUser.objectId, token: this.authenticatedUser['user-token'] }));
        this.router.navigate([returnUrl]);
      },
      error => {
        this.alertService.error(error);
      });
  }

  logout(): void {
    localStorage.removeItem(this.AUTHENTICATION_TOKEN_NAME);
    this.baseService.get(this.logoutUrl);
    this.router.navigate(['']);
    console.log('logout');
  }

  getCurrentUser() {

    if (this.isAuthenticated()) {
      let currentLocalData = JSON.parse(localStorage.getItem(this.AUTHENTICATION_TOKEN_NAME));

      this.userService.getUserById(currentLocalData['id']).subscribe(user => {
        this.currentUser = user;
        return this.currentUser;
      },
        error => {
          this.alertService.error(error);
        });

    }

    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.AUTHENTICATION_TOKEN_NAME);
  }

}
